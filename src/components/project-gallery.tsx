"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}
const reducedMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches;
const zoomTransform = (source: DOMRect, destination: DOMRect) =>
  `translate(${source.left - destination.left}px, ${source.top - destination.top}px) scale(${source.width / destination.width}, ${source.height / destination.height})`;

export default function ProjectGallery({
  images,
  label,
  enlarge,
  close,
}: {
  images: GalleryImage[];
  label: string;
  enlarge: string;
  close: string;
}) {
  const [displayed, setDisplayed] = useState(0);
  const [requested, setRequested] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const displayedRef = useRef(0);
  const requestedRef = useRef(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sourceRect = useRef<DOMRect | null>(null);
  const captureAnimation = useRef<Animation | null>(null);
  const zoomAnimation = useRef<Animation | null>(null);
  const closing = useRef(false);
  const image = images[displayed];

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => {
      if (!query.matches) return;
      captureAnimation.current?.finish();
      zoomAnimation.current?.finish();
    };
    query.addEventListener("change", change);
    return () => {
      query.removeEventListener("change", change);
      captureAnimation.current?.cancel();
      zoomAnimation.current?.cancel();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (
      !open ||
      !dialog ||
      !sourceRect.current ||
      reducedMotion() ||
      !dialog.animate
    )
      return;
    const destination = dialog.getBoundingClientRect();
    const animation = dialog.animate(
      [
        {
          transform: zoomTransform(sourceRect.current, destination),
          opacity: 0.55,
        },
        { transform: "none", opacity: 1 },
      ],
      { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
    zoomAnimation.current = animation;
    animation.onfinish = () => {
      if (zoomAnimation.current === animation) zoomAnimation.current = null;
    };
  }, [open]);

  const choose = (index: number) => {
    if (requestedRef.current === index) return;
    captureAnimation.current?.cancel();
    captureAnimation.current = null;
    requestedRef.current = index;
    setRequested(index);
    setIncoming(index === displayedRef.current ? null : index);
  };
  const finishCapture = (index: number, element: HTMLImageElement) => {
    if (requestedRef.current !== index) return;
    const commit = () => {
      if (requestedRef.current !== index) return;
      displayedRef.current = index;
      setDisplayed(index);
      setIncoming(null);
      captureAnimation.current = null;
    };
    if (reducedMotion() || !element.animate) {
      commit();
      return;
    }
    const animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      easing: "ease-out",
      fill: "forwards",
    });
    captureAnimation.current = animation;
    animation.onfinish = commit;
  };
  const show = () => {
    sourceRect.current =
      triggerRef.current?.querySelector("img")?.getBoundingClientRect() ?? null;
    closing.current = false;
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const hide = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closing.current) return;
    closing.current = true;
    const currentStyle = getComputedStyle(dialog);
    const start = {
      transform: currentStyle.transform,
      opacity: currentStyle.opacity,
    };
    zoomAnimation.current?.cancel();
    zoomAnimation.current = null;
    const source = triggerRef.current
      ?.querySelector("img")
      ?.getBoundingClientRect();
    if (reducedMotion() || !source || !dialog.animate) {
      dialog.close();
      return;
    }
    const animation = dialog.animate(
      [
        start,
        {
          transform: zoomTransform(source, dialog.getBoundingClientRect()),
          opacity: 0,
        },
      ],
      { duration: 200, easing: "cubic-bezier(.4,0,.8,.2)" },
    );
    zoomAnimation.current = animation;
    animation.onfinish = () => {
      zoomAnimation.current = null;
      dialog.close();
    };
  };
  const restore = () => {
    zoomAnimation.current?.cancel();
    zoomAnimation.current = null;
    closing.current = false;
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="project-gallery" role="group" aria-label={label}>
      <div className="preview-address">
        <span aria-hidden="true" />
        alambradowear.vercel.app
      </div>
      <button
        ref={triggerRef}
        type="button"
        className="image-trigger"
        onClick={show}
        aria-haspopup="dialog"
        aria-label={`${enlarge} — ${image.label}`}
      >
        <span className="gallery-image-stage" aria-busy={incoming !== null}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1440}
            height={1000}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 85vw, 90vw"
            className="gallery-base"
          />
          {incoming !== null && (
            <Image
              key={images[incoming].src}
              src={images[incoming].src}
              alt=""
              aria-hidden="true"
              width={1440}
              height={1000}
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 85vw, 90vw"
              className="gallery-incoming"
              onLoad={(event) => finishCapture(incoming, event.currentTarget)}
              onError={() => {
                if (requestedRef.current !== incoming) return;
                requestedRef.current = displayedRef.current;
                setRequested(displayedRef.current);
                setIncoming(null);
              }}
            />
          )}
        </span>
        <span className="image-enlarge">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
          </svg>
          {enlarge}
        </span>
      </button>
      <div className="gallery-choices">
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={requested === index}
            onClick={() => choose(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="image-dialog"
        aria-label={`${label} — ${image.label}`}
        onClose={restore}
        onCancel={(event) => {
          event.preventDefault();
          hide();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = [
            ...event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), a[href], [tabindex="0"]',
            ),
          ];
          const first = controls[0],
            last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) hide();
        }}
      >
        <div className="image-dialog-content">
          <div className="image-dialog-header">
            <p>
              {label} · {image.label}
            </p>
            <button type="button" autoFocus onClick={hide} aria-label={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {open && (
            <Image
              src={image.src}
              alt={image.alt}
              width={1440}
              height={1000}
              sizes="95vw"
              className="image-dialog-picture"
            />
          )}
        </div>
      </dialog>
    </div>
  );
}
