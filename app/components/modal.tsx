import { motion } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg p-5 w-[90%] max-w-lg relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-lg font-bold text-center">Sorry, Shop is Under Construction</h2>
        
        {/* Optional Image */}
        <div className="my-4 w-full h-40 relative">
          <Image
            src="/modal1.jpg"
            alt="Under Construction"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <p className="text-gray-500 text-center">
          Our shop is currently under construction. Check back soon for updates!
        </p>
      </motion.div>
    </div>
  );
};

export default Modal;