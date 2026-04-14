"use client";

import { about } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Обо мне</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <p className="text-gray-light leading-relaxed whitespace-pre-line">
                {about.description}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Опыт работы
              </h3>
              <div className="space-y-6">
                {about.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <span className="text-primary-light text-sm font-mono">
                      {exp.period}
                    </span>
                    <h4 className="text-white font-semibold mt-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray text-sm">{exp.company}</p>
                    <p className="text-gray-light text-sm mt-2">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
