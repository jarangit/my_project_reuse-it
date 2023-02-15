import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }: any) => {

  return (
    <motion.div
    onClick={onClick}
    className="fixed top-0 left-0 min-h-screen w-full backdrop-opacity-10 backdrop-invert bg-black/70 flex items-center justify-center z-50 px-3 border "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;