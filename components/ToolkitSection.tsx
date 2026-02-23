"use client";

import { motion } from "framer-motion";
import TechMarquee from "@/components/TechMarquee";

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
};

export default function ToolkitSection() {
  return (
    <section className="relative -mt-14 pb-16">
      {/* animated glow */}
      <div className="pointer-events-none absolute left-1/2 top-6 -z-10 h-44 w-[85%] -translate-x-1/2 rounded-full blur-3xl toolkit-glow" />

      {/* divider */}
      <div className="mx-auto max-w-6xl px-5">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* title reveal */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto max-w-6xl px-5 pt-10"
      >
        <div className="flex items-center justify-center gap-3 text-xs tracking-[0.35em] text-white/60">
          <span className="h-1 w-1 rounded-full bg-white/40" />
          TOOLKIT
          <span className="h-1 w-1 rounded-full bg-white/40" />
        </div>
      </motion.div>

      {/* glass rail */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mt-6 max-w-6xl px-5"
      >
        <div className="glass neon-hover relative overflow-hidden rounded-2xl py-3">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0b0d10] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0b0d10] to-transparent" />

          {/* two rows opposite */}
          <div className="space-y-3">
            {/* <TechMarquee duration={18} /> */}
            <TechMarquee reverse duration={22} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}