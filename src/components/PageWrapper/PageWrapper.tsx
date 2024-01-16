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
    <div className="grow flex flex-col overflow-hidden">
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          type: 'tween',
        }}
        className="grow flex flex-col relative p-4"
      >
        {children}
      </motion.div>
    </div>
  );
};
