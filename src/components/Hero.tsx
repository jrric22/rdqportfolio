// FILE: src/components/Hero.tsx
// Updated: includes Ricardo's graduation photo on the right side.
//
// LAYOUT: Two-column on large screens —
//   LEFT  → text content (name, role, CTA, socials)
//   RIGHT → circular photo with rotating gradient ring + floating badges
//
// PHOTO SETUP:
//   1. Place gradpic.JPG inside your /public folder (already provided in ZIP)
//   2. Reference it as src="/gradpic.JPG"
//      Vite automatically serves everything in /public at the root URL.

import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolio";

// ── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full
                      bg-green-500/8 blur-3xl animate-float pointer-events-none"
      />
      <div
        className="absolute bottom-32 left-10 w-64 h-64 rounded-full
                      bg-emerald-400/6 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      
      <div
        className="section-container relative z-10 flex flex-col lg:flex-row
                      items-center justify-between gap-14 w-full"
      >
        {/* ─── LEFT: Text ─────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-green-500/10 border border-green-500/20 text-green-400
                             text-xs font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-green-400 text-sm tracking-widest uppercase mb-3"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl font-bold text-white leading-none mb-4"
          >
            Ricardo
            <br />
            <span className="gradient-text text-glow">De Quiroz Jr.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-xl font-medium text-gray-400 mb-6"
          >
            {personal.title}
            <span className="text-green-400"> @ </span>Full-Stack
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base leading-relaxed max-w-md mb-8"
          >
            {personal.tagline}
          </motion.p>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mb-10 flex-wrap"
          >
            {[
              { label: "Experience", value: "5 Months" },
              { label: "Degree", value: "BSIT" },
              { label: "Based in", value: "🇵🇭 Philippines" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-display font-semibold text-white text-sm mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <FiArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/cv-ricardo-dequiroz.pdf"
              download
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-gray-500 font-mono">Find me on</span>
            <div className="w-12 h-px bg-surface-border" />

            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-surface-border text-gray-400
                         hover:border-green-500/40 hover:text-green-400 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-surface-border text-gray-400
                         hover:border-green-500/40 hover:text-green-400 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: Photo ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          {/* Outer rotating gradient ring */}
          <motion.div
            className="absolute -inset-1 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #22c55e, #6ee7b7, rgba(34,197,94,0.15), #22c55e)",
              borderRadius: "9999px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Glow behind photo */}
          <div className="absolute inset-6 rounded-full bg-green-500/25 blur-2xl" />

          {/* Photo — circular crop, object-top keeps face in frame */}
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                          border-4 border-surface glow-green"
          >
            <img
              src="/gradpic.JPG"
              alt="Ricardo De Quiroz Jr."
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle dark gradient at bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/4
                            bg-gradient-to-t from-surface/40 to-transparent"
            />
          </div>

          {/* Floating badge: Available — bottom right */}
          <motion.div
            className="absolute -bottom-3 -right-3 flex items-center gap-2
                       px-3 py-2 rounded-xl bg-surface-card border border-green-500/30
                       shadow-lg shadow-green-500/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-green-400">Available</span>
          </motion.div>

          {/* Floating badge: BSIT — top left */}
          <motion.div
            className="absolute -top-3 -left-3 flex items-center gap-2
                       px-3 py-2 rounded-xl bg-surface-card border border-surface-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <span className="font-mono text-xs text-gray-400">🎓 BSIT</span>
          </motion.div>
        </motion.div>
      </div>
      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-green-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
