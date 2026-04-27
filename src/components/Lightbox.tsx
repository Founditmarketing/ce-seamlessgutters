import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          onClick={onClose}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          
          <motion.img
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            src={imageSrc}
            alt="Fullscreen project view"
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
