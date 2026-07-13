export type AccentColor =
  | "red"
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "pink"
  | "cyan";

export const accentColors: Record<
  AccentColor,
  {
    border: string;
    glow: string;
    text: string;
  }
> = {
  red: {
    border: "hover:border-red-500/50",
    glow: "group-hover:bg-red-500/10",
    text: "group-hover:text-red-400",
  },
  blue: {
    border: "hover:border-blue-500/50",
    glow: "group-hover:bg-blue-500/10",
    text: "group-hover:text-blue-400",
  },
  green: {
    border: "hover:border-green-500/50",
    glow: "group-hover:bg-green-500/10",
    text: "group-hover:text-green-400",
  },
  purple: {
    border: "hover:border-purple-500/50",
    glow: "group-hover:bg-purple-500/10",
    text: "group-hover:text-purple-400",
  },
  orange: {
    border: "hover:border-orange-500/50",
    glow: "group-hover:bg-orange-500/10",
    text: "group-hover:text-orange-400",
  },
  pink: {
    border: "hover:border-pink-500/50",
    glow: "group-hover:bg-pink-500/10",
    text: "group-hover:text-pink-400",
  },
  cyan: {
    border: "hover:border-cyan-500/50",
    glow: "group-hover:bg-cyan-500/10",
    text: "group-hover:text-cyan-400",
  },
};
