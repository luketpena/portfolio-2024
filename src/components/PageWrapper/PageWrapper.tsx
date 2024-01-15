import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
}

const routeVariants = {
  initial: {
    y: '16px',
    opacity: 0,
  },
  animate: {
    y: '0px',
    opacity: 1,
  },
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.5,
        type: 'tween',
      }}
      className="max-w-[100%] mx-auto"
    >
      {children}
    </motion.div>
  );
};
