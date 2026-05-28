import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const themeStorageKey = "theme-mode";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const isThemeMode = (value: string | null): value is ThemeMode => {
  return value === "light" || value === "dark" || value === "system";
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const savedThemeMode = localStorage.getItem(themeStorageKey);
    return isThemeMode(savedThemeMode) ? savedThemeMode : "system";
  });

  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  const theme = useMemo<Theme>(() => {
    return themeMode === "system" ? systemTheme : themeMode;
  }, [systemTheme, themeMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(themeStorageKey, themeMode);
    }

    const root = document.documentElement;
    root.style.colorScheme = theme;
    if (theme === "dark") {
      root.style.setProperty("--bg-primary", "#0f172a");
      root.style.setProperty("--bg-secondary", "#1e293b");
      root.style.setProperty("--bg-tertiary", "#334155");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#cbd5e1");
      root.style.setProperty("--text-tertiary", "#94a3b8");
      root.style.setProperty("--border-color", "#475569");
      root.style.setProperty("--accent-color", "#6366f1");
    } else {
      root.style.setProperty("--bg-primary", "#f8fafc");
      root.style.setProperty("--bg-secondary", "#ffffff");
      root.style.setProperty("--bg-tertiary", "#f1f5f9");
      root.style.setProperty("--text-primary", "#0f172a");
      root.style.setProperty("--text-secondary", "#334155");
      root.style.setProperty("--text-tertiary", "#64748b");
      root.style.setProperty("--border-color", "#e2e8f0");
      root.style.setProperty("--accent-color", "#4f46e5");
    }
  }, [theme, themeMode]);

  const toggleTheme = () => {
    setThemeMode((previousMode) => {
      if (previousMode === "system") {
        return "light";
      }

      if (previousMode === "light") {
        return "dark";
      }

      return "system";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
