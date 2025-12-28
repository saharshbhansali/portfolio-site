import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const aboutData = {
  title: "About Me",
  description:
    "Cybersecurity, DevOps, System Administration and Cloud technology enthusiast. I enjoy ricing my OS (I use NixOS BTW) and tinkering with cutting edge technologies and frameworks.",
  highlights: [
    "Analyst at Bain & Company (BCN)",
    "Bachelor of Technology in Computer Science and Engineering at Vellore Institute of Technology, Vellore with a CGPA of 9.18",
    "Experienced in Python, Go, JavaScript/TypeScript, and cloud platforms",
    "Passionate about cybersecurity and ethical hacking",
    "AWS Solutions Architect Associate certified",
    "Ex-Research Lead at ACM-VIT (Student Chapter)",
  ],
};

const container = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.18,
      type: 'spring',
      bounce: 0.35,
      duration: 0.9,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.7,
    },
  },
};

export default function AboutMotion() {
  const controls = useAnimation();
  const ref = useRef(null);
  // Use threshold 0.2 and rootMargin to trigger animation when any part is visible
  // Lower threshold for higher sensitivity and adjust rootMargin
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-950" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -40, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', bounce: 0.5, duration: 0.8 },
              },
            }}
          >
            {aboutData.title}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Description */}
          <motion.div variants={item}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {aboutData.description}
            </p>
            <div className="space-y-4">
              {aboutData.highlights.map((highlight, idx) => (
                <motion.div
                  className="flex items-start gap-3"
                  key={idx}
                  variants={item}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Skills Preview */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-900 dark:to-dark-800 rounded-2xl p-8"
            variants={item}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Quick Skills Overview
            </h3>
            <div className="space-y-4">
              <SkillBar name="Python" level="Advanced" percent={90} color="bg-blue-500" />
              <SkillBar name="Go" level="Intermediate" percent={75} color="bg-purple-500" />
              <SkillBar name="JavaScript/TypeScript" level="Intermediate" percent={80} color="bg-green-500" />
              <SkillBar name="AWS/Cloud" level="Intermediate" percent={85} color="bg-orange-500" />
              <SkillBar name="Cybersecurity" level="Intermediate" percent={70} color="bg-red-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, percent, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          className={`${color} h-2 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
