import { test, expect } from "@playwright/test";
for (const [path, locale] of [
  ["/", "pt-BR"],
  ["/en", "en"],
] as const) {
  test(`${locale}: content, accessibility structure and real destinations`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("details")).toHaveCount(4);
    await expect(page.locator("#projetos article")).toHaveCount(3);
    await expect(page.locator("#projeto-alambrado")).toContainText("Alambrado");
    await expect(page.locator("#projeto-alambrado a").first()).toHaveAttribute(
      "href",
      "https://alambradowear.vercel.app/",
    );
    await expect(
      page.locator('#contato a[href="mailto:guilherme.ghca@hotmail.com"]'),
    ).toHaveCount(2);
    await expect(page.locator("[disabled]")).toHaveCount(0);
    await expect(page.locator("body")).not.toContainText(
      "Conteúdo em definição",
    );
    const structure = await page.evaluate(() => {
      const ids = [...document.querySelectorAll("[id]")].map(
        (element) => element.id,
      );
      return {
        duplicates: ids.filter((id, index) => ids.indexOf(id) !== index),
        missing: [...document.querySelectorAll('a[href^="#"]')]
          .map((element) => element.getAttribute("href")!)
          .filter((href) => !document.querySelector(href)),
        overflow: document.documentElement.scrollWidth > innerWidth,
        heroTop: document.querySelector("h1")!.getBoundingClientRect().top,
      };
    });
    expect(structure).toMatchObject({
      duplicates: [],
      missing: [],
      overflow: false,
    });
    expect(structure.heroTop).toBeGreaterThan(81);
    await expect(page.locator("#projeto-alambrado img")).toBeVisible();
    expect(
      await page
        .locator("#projeto-alambrado img")
        .evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
    ).toBe(true);
    const summary = page.locator("summary").first();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("details").first()).toHaveAttribute("open", "");
    if (locale === "en") {
      await expect(page.locator("body")).not.toContainText(
        /Ver projetos|Conteúdo em definição|Enviar e-mail|Onde concentro/,
      );
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
        "content",
        /Software Developer/,
      );
    }
    for (const link of await page.locator("a[download]").all()) {
      const response = await page.request.get(
        (await link.getAttribute("href"))!,
      );
      expect(response.ok()).toBe(true);
      expect(response.headers()["content-type"]).toContain("application/pdf");
    }
    expect(errors).toEqual([]);
  });
  test(`${locale}: navigation and language selection`, async ({ page }) => {
    await page.goto(path);
    if (page.viewportSize()!.width < 768) {
      const toggle = page.locator('button[aria-controls="mobile-menu"]');
      await toggle.focus();
      await page.keyboard.press("Enter");
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await expect(page.locator("#mobile-menu a").first()).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(toggle).toBeFocused();
      await toggle.click();
      await page.locator('#mobile-menu a[href="#projetos"]').click();
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(page.locator("#projetos")).toBeFocused();
      expect(
        await page
          .locator("#projetos")
          .evaluate((element) => element.getBoundingClientRect().top),
      ).toBeGreaterThanOrEqual(80);
    }
    await page
      .getByRole("link", {
        name: locale === "en" ? "PT — Português (Brasil)" : "EN — English",
        exact: true,
      })
      .click();
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      locale === "en" ? "pt-BR" : "en",
    );
    await expect(page.getByRole("main")).toHaveCount(1);
  });
}
