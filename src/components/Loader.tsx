import { AnimatePresence, motion, Variants } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading();
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [setIsLoading]);

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
    exit: { 
      opacity: 0, 
      scale: 0.5, 
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      } 
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        repeatDelay: 0.2
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="loader" 
          initial="hidden" 
          animate="visible" 
          exit="exit"
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            variants={svgVariants}
            custom={0}
          >
            <title>Nikhil Sharma</title>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--theme-color)', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: 'var(--lightest-slate)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <g>
              {/* Letter L */}
              {/* <motion.rect
                x="15"
                y="15"
                width="20"
                height="70"
                fill="url(#grad1)"
                stroke="var(--theme-color)"
                strokeWidth="1.5"
                variants={svgVariants}
                custom={0.5}
                initial="hidden"
                animate="visible"
              /> */}
              {/* Letter N */}
              <motion.path
                d="M 1 19.2 L 0 18.9 Q 0.1 11.9 2.05 7.75 Q 4 3.6 7.1 1.8 Q 10.2 0 13.5 0 Q 18.5 0 22.45 3.25 Q 26.4 6.5 29.55 12.1 Q 32.7 17.7 35.05 24.75 Q 37.4 31.8 39.1 39.45 Q 40.8 47.1 41.8 54.5 Q 42.4 50.5 43.05 44.7 Q 43.7 38.9 44.2 32.5 Q 44.7 26.1 44.7 20.3 Q 44.7 16.1 44.4 12.65 Q 44.1 9.2 43.4 6.7 L 43.4 5.9 Q 46 3 48.65 1.5 Q 51.3 0 53.6 0 Q 57 0 59.25 2.95 Q 61.5 5.9 61.5 11.3 Q 61.5 15.3 60.4 21.05 Q 59.3 26.8 57.8 33.3 Q 56.3 39.8 55.15 46.05 Q 54 52.3 53.9 57.3 Q 53.9 58.7 54.1 60.3 Q 54.3 61.9 56.2 61.9 Q 56.3 62.3 56.3 62.5 L 56.3 62.9 Q 56.2 66.7 53.2 69.65 Q 50.2 72.6 45.2 72.6 Q 41.3 72.6 38.6 70.6 Q 35.9 68.6 34.1 65.25 Q 32.3 61.9 31.05 57.65 Q 29.8 53.4 28.7 48.9 Q 26.7 41.1 24.55 34.05 Q 22.4 27 18.8 21.1 Q 19 25.1 18.5 29.85 Q 18 34.6 17.45 39.45 Q 16.9 44.3 16.9 48.8 Q 16.9 52.8 17.6 56.15 Q 18.3 59.5 20.1 62.1 Q 20.1 67 17 69.8 Q 13.9 72.6 10.2 72.6 Q 6.5 72.6 3.45 69.6 Q 0.4 66.6 0.4 60.1 Q 0.4 53.6 1.65 47.55 Q 2.9 41.5 4.55 35.9 Q 6.2 30.3 7.45 25.25 Q 8.7 20.2 8.7 15.7 Q 7.2 15.1 5.9 15.1 Q 4.1 15.1 2.9 16.2 Q 1.7 17.3 1 19.2 Z"
                fill="url(#grad1)"
                stroke="var(--theme-color)"
                strokeWidth="2.5"
                variants={pathVariants as Variants}
                initial="hidden"
                animate="visible"
                transform="translate(20,25) scale(0.65)"
              />
              {/* <motion.rect
                x="15"
                y="65"
                width="50"
                height="20"
                fill="url(#grad1)"
                stroke="var(--theme-color)"
                strokeWidth="1.5"
                variants={svgVariants}
                custom={0.8}
                initial="hidden"
                animate="visible"
              /> */}

              {/* Letter S */}
              <motion.path
                d="M 19.6 73.2 Q 12.9 73.2 8.55 70.9 Q 4.2 68.6 2.1 65 Q 0 61.4 0 57.6 Q 0 53.9 1.8 50.55 Q 3.6 47.2 6.95 45 Q 10.3 42.8 14.9 42.8 Q 14.8 43.7 14.8 44.45 L 14.8 45.2 Q 14.8 51.9 16.1 55.75 Q 17.4 59.6 19.4 61.25 Q 21.4 62.9 23.5 62.9 Q 26.7 62.9 29.2 60.35 Q 31.7 57.8 31.7 54.4 Q 31.7 50.6 28.45 47.7 Q 25.2 44.8 20.2 41.3 Q 17.4 39.2 14.25 36.55 Q 11.1 33.9 8.9 30.25 Q 6.7 26.6 6.7 21.6 Q 6.7 16.4 9.15 12.4 Q 11.6 8.4 15.65 5.65 Q 19.7 2.9 24.55 1.45 Q 29.4 0 34.2 0 Q 40.1 0 43.9 1.9 Q 47.7 3.8 49.6 6.8 Q 51.5 9.8 51.5 13 Q 51.5 16 49.85 18.75 Q 48.2 21.5 45 23.2 Q 41.8 24.9 37.1 24.9 Q 37.4 23.5 37.5 22.35 Q 37.6 21.2 37.6 20.3 Q 37.6 15.3 35.45 13.15 Q 33.3 11 30.7 11 Q 28.2 11 25.9 12.85 Q 23.6 14.7 23.6 18.8 Q 23.6 22.3 25.45 24.8 Q 27.3 27.3 30.25 29.2 Q 33.2 31.1 36.5 32.9 Q 39.9 34.7 43.05 36.85 Q 46.2 39 48.3 41.9 Q 50.4 44.8 50.4 49.2 Q 50.4 53.8 47.9 58.15 Q 45.4 62.5 41.1 65.85 Q 36.8 69.2 31.25 71.2 Q 25.7 73.2 19.6 73.2 Z"
                fill="url(#grad1)"
                stroke="var(--theme-color)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants as Variants}
                initial="hidden"
                animate="visible"
                transform="translate(45,25) scale(0.65)"
              />

              {/* Additional Shapes */}
              <motion.circle
                cx="25"
                cy="25"
                r="5"
                fill="var(--theme-color)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx="75"
                cy="75"
                r="5"
                fill="var(--theme-color)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              />
              <motion.polygon
                points="50,10 60,30 40,30"
                fill="var(--theme-color-secondary)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.polygon
                points="30,90 40,70 20,70"
                fill="var(--theme-color-secondary)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut",
                  delay: 0.7 
                }}
              />

              {/* Glowing Effect */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="var(--theme-color)"
                strokeWidth="1"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0.9, 1.05, 0.9],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Loader;