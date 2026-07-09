"use client";

import { motion } from "framer-motion";
import { SkillIcon } from "./SkillIcon";

type SkillsListProps = {
  items: readonly string[];
};

export default function SkillsList({ items }: SkillsListProps) {
  return (
    <motion.div 
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.04
          }
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-5 flex flex-wrap gap-2"
    >
      {items.map((item) => (
        <motion.span 
          key={item} 
          variants={{
            hidden: { opacity: 0, y: 15, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="chip gap-2 cursor-default"
        >
          <SkillIcon name={item} className="h-4 w-4 shrink-0" />
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
