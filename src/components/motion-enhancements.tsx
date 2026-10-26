"use client";

import { useEffect } from "react";

// Progressive enhancement: content remains visible with JS disabled or reduced motion.
export default function MotionEnhancements() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const elements = [
      ...document.querySelectorAll<HTMLElement>(
        ".section > .container > :first-child, .project-card, #stack article, #beyond-the-code article, #sobre aside",
      ),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const groups = new Map<Element, number>();
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!preference.matches) {
            const element = entry.target as HTMLElement;
            const parent = element.parentElement;
            if (
              parent &&
              element.matches(
                ".project-card, #stack article, #beyond-the-code article",
              )
            ) {
              const index = groups.get(parent) ?? 0;
              element.style.setProperty(
                "--reveal-delay",
                `${Math.min(index, 3) * 60}ms`,
              );
              groups.set(parent, index + 1);
            }
            element.classList.add("reveal-in");
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    for (const element of elements) {
      if (element.getBoundingClientRect().top >= innerHeight)
        observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return null;
}
