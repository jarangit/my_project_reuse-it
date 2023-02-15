import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "./backdrop";
import { Children } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  handleClose: any;
  open: boolean;
  onSubmit: any;
  children: JSX.Element;
  title: string;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


const Modal = ({ handleClose, open, children, onSubmit, title }: Props) => {

  return (
    <AnimatePresence>
      {open && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={`paper_white min-w-[500px] min-h-[300px] max-h-[500px] overflow-y-scroll`}>
              {/* header modal */}
              <div className={`flex justify-between items-center border-b border-gray pb-3 mb-3`}>
                <div className={`text-xl font-semibold`}>
                  {title}
                </div>
                <div onClick={handleClose} className={`hover_green`}>
                  <AiOutlineCloseCircle size = {25}/>
                </div>
              </div>
              {/* contents */}
              {children}
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};


export default Modal;