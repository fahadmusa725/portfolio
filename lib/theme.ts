export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

// Runs before first paint so a stored choice beats the OS preference without a flash.
export const themeInitScript = `(function(){try{var theme=localStorage.getItem("${THEME_STORAGE_KEY}");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme}}catch(e){}})();`;
