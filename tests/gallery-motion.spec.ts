import { test, expect } from "@playwright/test";

for (const [route, locale] of [
  ["/", "pt"],
  ["/en", "en"],
] as const) {
  test(`${locale}: gallery selection, modal keyboard and focus restoration`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route);
    const group = page.getByRole("group", {
      name: locale === "pt" ? "Imagens do Alambrado" : "Alambrado screenshots",
      exact: true,
    });
    const stage = group.locator(".gallery-image-stage");
    const base = group.locator(".gallery-base");
    await base.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        base.evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
    const height = await stage.evaluate(
      (element) => element.getBoundingClientRect().height,
    );
    let releaseImage!: () => void;
    const imageGate = new Promise<void>((resolve) => {
      releaseImage = resolve;
    });
    await page.route(
      (url) =>
        url.pathname === "/_next/image" &&
        (url.searchParams.get("url") ?? "").includes("alambrado-catalogo"),
      async (request) => {
        await imageGate;
        await request.continue();
      },
    );
    try {
      await group
        .getByRole("button", {
          name: locale === "pt" ? "Catálogo" : "Catalog",
          exact: true,
        })
        .click();
      await expect(stage).toHaveAttribute("aria-busy", "true");
      await expect(base).toHaveAttribute("src", /alambrado\.webp/);
      expect(
        Math.abs(
          (await stage.evaluate(
            (element) => element.getBoundingClientRect().height,
          )) - height,
        ),
      ).toBeLessThan(1);
    } finally {
      releaseImage();
    }
    await expect(group.locator("img").first()).toHaveAttribute(
      "src",
      /alambrado-catalogo/,
    );
    await group
      .getByRole("button", {
        name: locale === "pt" ? "Carrinho" : "Cart",
        exact: true,
      })
      .click();
    await expect(group.locator("img").first()).toHaveAttribute(
      "src",
      /alambrado-carrinho/,
    );
    await group.locator(".gallery-choices button").evaluateAll((buttons) => {
      (buttons[0] as HTMLButtonElement).click();
      (buttons[1] as HTMLButtonElement).click();
      (buttons[2] as HTMLButtonElement).click();
    });
    await expect(base).toHaveAttribute("src", /alambrado-carrinho/);
    expect(
      Math.abs(
        (await stage.evaluate(
          (element) => element.getBoundingClientRect().height,
        )) - height,
      ),
    ).toBeLessThan(1);
    const trigger = group.locator(".image-trigger");
    await trigger.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const close = dialog.getByRole("button", {
      name: locale === "pt" ? "Fechar imagem ampliada" : "Close enlarged image",
    });
    await expect(close).toBeFocused();
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => {
        const d = document.querySelector("dialog");
        return d?.contains(document.activeElement);
      }),
    ).toBe(true);
    await expect
      .poll(() => page.evaluate(() => document.body.style.overflow))
      .toBe("hidden");
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await expect
      .poll(() => page.evaluate(() => document.body.style.overflow))
      .toBe("");
    await trigger.click();
    await close.click();
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await page.mouse.click(1, 1);
    await expect(dialog).not.toBeVisible();
    expect(errors).toEqual([]);
  });
  test(`${locale}: active navigation follows scroll`, async ({ page }) => {
    await page.goto(route);
    for (const id of ["projetos", "sobre", "stack"]) {
      await page
        .locator(`#${id}`)
        .evaluate((element) => element.scrollIntoView());
      await expect(
        page.locator(`nav a[href="#${id}"]`).first(),
      ).toHaveAttribute("aria-current", "location");
      if (page.viewportSize()!.width >= 768) {
        const indicator = page.locator(
          ".desktop-section-links [data-nav-indicator]",
        );
        await expect(indicator).toHaveAttribute("data-visible", "true");
        await expect
          .poll(() =>
            indicator.evaluate((element) => {
              const active = element.parentElement!.querySelector(
                'a[aria-current="location"]',
              )!;
              return Math.abs(
                element.getBoundingClientRect().left -
                  active.getBoundingClientRect().left,
              );
            }),
          )
          .toBeLessThan(1);
      }
    }
    await page.evaluate(() =>
      scrollTo(0, document.documentElement.scrollHeight),
    );
    await expect(
      page.locator('nav a[href="#contato"]').first(),
    ).toHaveAttribute("aria-current", "location");
    await page.evaluate(() => scrollTo(0, 0));
    await expect(page.locator('nav a[aria-current="location"]')).toHaveCount(0);
  });
  test(`${locale}: reduced motion and neutral preview surface`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    await expect
      .poll(() =>
        page
          .locator("h1")
          .evaluate((element) => getComputedStyle(element).animationName),
      )
      .toBe("none");
    const preview = page.locator(".project-preview-column");
    expect(
      await preview.evaluate(
        (element) => getComputedStyle(element).backgroundColor,
      ),
    ).toBe("rgb(17, 24, 39)");
    await page.locator("#sobre").scrollIntoViewIfNeeded();
    const motion = await page
      .locator("#sobre > .container > :first-child")
      .evaluate((element) => getComputedStyle(element).animationName);
    expect(motion).toBe("none");
    await page.locator(".image-trigger").click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    expect(
      await dialog.evaluate((element) => element.getAnimations().length),
    ).toBe(0);
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
  });
}
