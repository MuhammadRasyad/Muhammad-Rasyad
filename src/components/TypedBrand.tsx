import { motion } from "framer-motion";
import { Braces } from "lucide-react";

type TypedBrandProps = {
  text?: string;
  typeDuration?: number;
  className?: string;
  iconSize?: number;
};

export default function TypedBrand({
  text = "RasyadDev",
  typeDuration = 4,
  className = "",
  iconSize = 22,
}: TypedBrandProps) {
  const chars = text.split("");

  return (
    <div
      className={`brand inline-flex items-center gap-2 ${className}`}
      aria-label={text}
    >
      {/* ===== Logo di kiri ===== */}
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        <Braces
          className="text-sky-400 drop-shadow"
          size={iconSize}
        />
      </motion.span>

      {/* ===== Teks RasyadDev (efek ketik halus) ===== */}
      <motion.span
        className="font-bold text-white text-lg flex"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: typeDuration / chars.length,
            },
          },
        }}
      >
        {chars.map((ch, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: "0.4em", filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
