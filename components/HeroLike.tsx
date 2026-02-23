"use client";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroLike() {
  return (
    <section className="hero-bg min-h-[92vh]">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* top mini chip (like “Home”) */}
          <motion.div variants={item} className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Home
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/60">
                …
              </span>
            </div>
          </motion.div>

          {/* avatar + status */}
          <motion.div variants={item} className="flex flex-col items-center">
            <div className="relative">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                {/* Replace with your image in /public/me.jpeg */}
                <img src="/me.jpeg" alt="Dimple" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available Now
            </div>
          </motion.div>

          {/* hello line */}
          <motion.p variants={item} className="mt-8 text-sm text-white/80">
            Hello, I’m <span className="text-white">Dimple Kumari</span>
          </motion.p>

          {/* big statement like reference */}
          <motion.h1
  variants={item}
  className="mt-6 text-balance font-sans text-5xl font-semibold tracking-tight md:text-7xl"
>
  <span className="text-white/90">Not just modern </span>{" "}
  <span className="font-serif font-normal italic text-white">design!</span>
  <br />
  <span className="text-white">Engineered to </span>{" "}
  <span className="font-serif font-normal italic text-white/95">last.</span>
</motion.h1>

          {/* tiny experience row */}
          <motion.div variants={item} className="mt-6 flex items-center gap-3 text-sm text-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span>Full-Stack • Clean UI • Maintainable Systems</span>
          </motion.div>

          {/* buttons */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-6 py-3 text-sm text-white shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur transition hover:bg-white/12"
            >
              Let’s Talk
              <span className="transition group-hover:translate-x-0.5">↗</span>
            </a>
            <a href="#resume" className="text-sm text-white/60 transition hover:text-white/85">
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}