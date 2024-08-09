const drawLine = {
  hidden: { pathLength: 0 },
  visible: () => {
    const delay = 0.5;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 2.5 },
      },
    };
  },
};

const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: () => {
    return {
      x: 0,
      y: 0,
      opacity: 100,
      transition: {
        type: 'tween',
        delay: 0.5,
        duration: 1,
        ease: 'easeOut',
      },
    };
  },
};

const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: () => {
    return {
      x: 0,
      y: 0,
      opacity: 100,
      transition: {
        type: 'tween',
        delay: 0.5,
        duration: 1,
        ease: 'easeOut',
      },
    };
  },
};

export const skillsStagger = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -50,
      y: -50,
    },
    show: {
      opacity: 100,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        delay: delay,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
};

const textVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: () => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        delay: 0.5,
      },
    };
  },
};

export { drawLine, slideInLeft, slideInRight, textVariant };
