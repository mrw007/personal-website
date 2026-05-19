export type Theme = "light" | "dark";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ComponentProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
