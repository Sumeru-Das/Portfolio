import { motion, AnimatePresence } from "framer-motion";

export default function HoverLabel({ label }) {
  return (
    <AnimatePresence>
      {label && (
        <motion.div
          key="hover-label"
          className="
            pointer-events-none
            fixed bottom-6 left-1/2 z-[9999]
            -translate-x-1/2
            rounded-full
            bg-white
            px-6 py-2
            text-sm font-medium
            text-secondary-600
            shadow-lg
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
