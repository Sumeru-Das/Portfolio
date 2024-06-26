export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5,
    },
  }),
};

export const navVarients = {
  initial: { opacity: 0, y: "-100%" },
  vissible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 },
  },
};
