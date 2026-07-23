import { useThemeStore, ThemeMode } from '../stores/themeStore';

export function useTheme() {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' };
}
