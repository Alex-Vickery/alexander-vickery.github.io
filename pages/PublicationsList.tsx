import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  Variants,
} from "framer-motion";
import { Link } from "react-router-dom";
import { publications } from "../data/publications";
import { PublicationStatus, Author } from "../types";
import { Users, Calendar, BookOpen, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const PublicationsList: React.FC = () => {
  const [filter, setFilter] = useState<PublicationStatus | "All">("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredDocs =
    filter === "All"
      ? publications
      : publications.filter((p) => p.status === filter);

  const formatAuthors = (authors: Author[]) => {
    if (authors.length === 0) return "";
    if (authors.length === 1) return authors[0].name;
    const names = authors.map((a) => a.name);
    return names.slice(0, -1).join(", ") + " & " + names[names.length - 1];
  };

  const StatusBadge: React.FC<{ status: PublicationStatus }> = ({ status }) => {
    return (
      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-gray-50 text-gray-600 border-gray-100">
        {status}
      </span>
    );
  };

  const categories = ["All", ...Object.values(PublicationStatus)];

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-900/5 z-50">
        <motion.div
          className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] origin-left"
          style={{ scaleX }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-500 w-full max-w-none font-light leading-relaxed"
          >
            A collection of my peer-reviewed publications and research
            initiatives.
          </motion.p>
        </header>

        {/* Filter Selection: Centered and Wrapping for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center lg:justify-start gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                filter === cat
                  ? "bg-gray-900 text-white shadow-xl shadow-gray-200 ring-2 ring-gray-900/5"
                  : "bg-white text-gray-400 border border-gray-100 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredDocs.map((pub) => (
              <motion.div
                key={pub.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="will-change-transform"
              >
                <Link to={`/publication/${pub.id}`} className="block group">
                  <div className="p-8 md:p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-gray-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                      <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between md:justify-start">
                          <StatusBadge status={pub.status} />
                          <div className="md:hidden">
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
                          </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {pub.title}
                        </h2>

                        {pub.subtitle && (
                          <p className="text-lg text-gray-400 mt-2 font-light italic">
                            {pub.subtitle}
                          </p>
                        )}

                        <div className="mt-6">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3 flex items-center">
                            <span className="w-4 h-px bg-blue-200 mr-2"></span>
                            Abstract
                          </div>
                          <p className="text-gray-500 line-clamp-2 text-base font-light leading-relaxed max-w-3xl">
                            {pub.abstract}
                          </p>
                        </div>

                        <div className="mt-6">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3 flex items-center">
                            <span className="w-4 h-px bg-blue-200 mr-2"></span>
                            About
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-4">
                              <Users className="w-5 h-5 mt-0.5 text-gray-300 shrink-0 group-hover:text-gray-900 transition-colors" />
                              <span className="text-sm text-gray-900 font-medium leading-snug">
                                {formatAuthors(pub.authors)}
                              </span>
                            </div>

                            <div className="flex items-start gap-4">
                              <Calendar className="w-5 h-5 mt-0.5 text-gray-300 shrink-0 group-hover:text-gray-900 transition-colors" />
                              <span className="text-sm text-gray-900 font-medium uppercase tracking-wider">
                                {pub.year}
                              </span>
                            </div>

                            {pub.journal && (
                              <div className="flex items-start gap-4">
                                <BookOpen className="w-5 h-5 mt-0.5 text-gray-300 shrink-0 group-hover:text-gray-900 transition-colors" />
                                <span className="text-sm text-gray-900 italic font-medium leading-snug">
                                  {pub.journal}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:flex flex-col items-end shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-500 group-hover:shadow-lg">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationsList;
