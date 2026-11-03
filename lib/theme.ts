export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Runs before first paint so a stored choice beats the OS preference without a flash.
export const themeInitScript = `(function(){try{var theme=localStorage.getItem("${THEME_STORAGE_KEY}");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme}}catch(e){}})();`;

export function toggleTheme(): void {
  const applied = document.documentElement.dataset.theme;
  const current: Theme = applied === "light" || applied === "dark" ? applied : systemTheme();
  const next: Theme = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private browsing); the theme still applies for this page.
  }
}
