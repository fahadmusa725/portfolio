export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Runs before first paint so a stored choice beats the OS preference without a flash.
export const themeInitScript = `(function(){try{var theme=localStorage.getItem("${THEME_STORAGE_KEY}");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme}}catch(e){}})();`;

let isTransitioning = false;

export function toggleTheme(buttonEl?: HTMLElement | null): void {
  // Ignore clicks while a transition is running to prevent race conditions on quick double-clicks
  if (isTransitioning) {
    return;
  }

  const applied = document.documentElement.dataset.theme;
  const current: Theme = applied === "light" || applied === "dark" ? applied : systemTheme();
  const next: Theme = current === "dark" ? "light" : "dark";

  const applyTheme = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private browsing); the theme still applies for this page.
    }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fallback: apply directly without animation if reduced motion is requested or startViewTransition is unsupported
  if (
    prefersReducedMotion ||
    typeof document === "undefined" ||
    !("startViewTransition" in document) ||
    typeof document.startViewTransition !== "function"
  ) {
    applyTheme();
    return;
  }

  // Calculate circular reveal origin from button center, fallback to viewport center
  const rect = buttonEl?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  isTransitioning = true;

  try {
    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      const clipAnimation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );

      clipAnimation.addEventListener("finish", () => {
        isTransitioning = false;
      });
      clipAnimation.addEventListener("cancel", () => {
        isTransitioning = false;
      });
    }).catch(() => {
      isTransitioning = false;
    });

    transition.finished.finally(() => {
      isTransitioning = false;
    });
  } catch {
    isTransitioning = false;
  }
}
