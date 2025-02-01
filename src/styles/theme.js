export const theme = {
  colors: {
    // Primary colors with a modern gradient palette
    primary: {
      DEFAULT: "#8B5CF6", // Vibrant purple
      light: "#A78BFA",
      dark: "#7C3AED",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
    },
    // Secondary colors for accents
    secondary: {
      DEFAULT: "#3B82F6", // Electric blue
      light: "#60A5FA",
      dark: "#2563EB",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    },
    // Accent colors for highlights
    accent: {
      DEFAULT: "#EC4899", // Neon pink
      light: "#F472B6",
      dark: "#DB2777",
      gradient: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    },
    // Dark theme neutrals
    neutral: {
      50: "#18181B",
      100: "#27272A",
      200: "#3F3F46",
      300: "#52525B",
      400: "#71717A",
      500: "#A1A1AA",
      600: "#D4D4D8",
      700: "#E4E4E7",
      800: "#F4F4F5",
      900: "#FAFAFA",
    },
    // Background variations for glassmorphism
    background: {
      primary: "#09090B",
      secondary: "#18181B",
      glass: "rgba(24, 24, 27, 0.7)",
      gradient: "linear-gradient(135deg, #09090B 0%, #18181B 100%)",
    },
    // Glass effects
    glass: {
      light: "rgba(255, 255, 255, 0.1)",
      medium: "rgba(255, 255, 255, 0.05)",
      dark: "rgba(0, 0, 0, 0.3)",
    },
  },

  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
      anime: ["Bangers", "cursive"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
  },

  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },

  borderRadius: {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.6)",
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  },

  blur: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },

  animation: {
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      smooth: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      verySlow: "700ms",
    },
  },

  glassmorphism: {
    light: {
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(12px)",
    },
    dark: {
      background: "rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
    },
  },
};
