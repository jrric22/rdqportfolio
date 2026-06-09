// FILE: src/components/About.tsx
// Updated: photo now appears at the top of the right column as a smaller card-style image.

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers, FiMapPin, FiMail, FiBook } from "react-icons/fi";
import { personal } from "../data/portfolio";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const learning = [
"Next.js", "Docker", "CI/CD", "tRPC", "Testing (Vitest)"

]

const infoCards = [
  { icon: <FiMapPin className="w-4 h-4" />, label: "Location", value: personal.location },
  { icon: <FiMail className="w-4 h-4" />,   label: "Email",    value: personal.email },
  { icon: <FiBook className="w-4 h-4" />,   label: "Degree",   value: personal.degree },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/2 to-transparent
                      pointer-events-none" />

      <div className="section-container">

        {/* ── Section Header ───────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mt-4" />
        </motion.div>

        {/* ── Two-column Grid ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Bio text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}

            <blockquote className="border-l-2 border-green-500 pl-4 mt-6">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                &ldquo;I believe great software is built at the intersection of
                clean architecture, thoughtful UX, and team collaboration.&rdquo;
              </p>
            </blockquote>

            {/* Currently learning */}
            <div className="mt-6 p-4 rounded-xl bg-surface-card border border-surface-border">
              <p className="text-xs font-mono text-green-400 mb-2">// currently learning</p>
              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Photo + Info cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >

            {/* ── Photo card ──────────────────────────────────── */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-surface-border
                         bg-surface-card group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Photo — slightly taller rectangle crop */}
              <div className="h-64 overflow-hidden">
                <img
                  src="/gradpic.JPG"
                  alt="Ricardo De Quiroz Jr."
                  className="w-full h-full object-cover object-top
                             group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay gradient + name label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t
                              from-surface via-surface/70 to-transparent px-4 py-4">
                <p className="font-display font-bold text-white text-sm">
                  Ricardo De Quiroz Jr.
                </p>
                <p className="font-mono text-xs text-green-400">
                  Junior Software Engineer
                </p>
              </div>

              {/* Green corner accent */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5
                              px-2.5 py-1 rounded-full bg-surface-card/80 backdrop-blur-sm
                              border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] text-green-400">Available</span>
              </div>
            </motion.div>

            {/* ── Info cards ──────────────────────────────────── */}
            {infoCards.map((item, i) => (
              <motion.div
                key={item.label}
                className="card flex items-center gap-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20
                                flex items-center justify-center text-green-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* What I work with */}
            <div className="card">
              <p className="text-xs font-mono text-green-400 mb-4">// what I work with</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <FiCode className="w-5 h-5" />,     label: "Frontend",   detail: "React + TS" },
                  { icon: <FiLayers className="w-5 h-5" />,   label: "Full-Stack", detail: "Remix" },
                  { icon: <FiDatabase className="w-5 h-5" />, label: "Database",   detail: "PostgreSQL" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col items-center text-center p-3 rounded-xl
                               bg-surface-muted border border-surface-border gap-2"
                  >
                    <div className="text-green-400">{spec.icon}</div>
                    <div>
                      <p className="text-white text-xs font-semibold">{spec.label}</p>
                      <p className="text-gray-500 text-[10px] font-mono">{spec.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
