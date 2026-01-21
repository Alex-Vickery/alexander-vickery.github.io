import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { publications } from "../data/publications";
import { PublicationStatus } from "../types";
import { Search, Filter, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const PublicationsList: React.FC = () => {
  const [filter, setFilter] = useState<PublicationStatus | "All">("All");

  const filteredDocs =
    filter === "All"
      ? publications
      : publications.filter((p) => p.status === filter);

  const StatusBadge: React.FC<{ status: PublicationStatus }> = ({ status }) => {
    const colors = {
      [PublicationStatus.PUBLISHED]: "bg-emerald-100 text-emerald-700",
      [PublicationStatus.WORKING_PAPER]: "bg-blue-100 text-blue-700",
      [PublicationStatus.WORK_IN_PROGRESS]: "bg-amber-100 text-amber-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-gray-900"
        >
          Publications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-gray-500 max-w-3xl"
        >
          A collection of my peer-reviewed publications and ongoing research
          initiatives.
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {["All", ...Object.values(PublicationStatus)].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === cat
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid gap-6"
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
                <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-4">
                        <StatusBadge status={pub.status} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {pub.title}
                      </h2>
                      {pub.subtitle && (
                        <p className="text-lg text-gray-500 mt-1">
                          {pub.subtitle}
                        </p>
                      )}
                      <p className="mt-4 text-gray-600 line-clamp-2 text-sm font-medium leading-relaxed">
                        {pub.abstract}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-900">
                        <span className="text-gray-900">
                          {pub.authors.join(", ")}
                        </span>
                        <span>•</span>
                        <span>{pub.year}</span>
                        {pub.journal && (
                          <>
                            <span>•</span>
                            <span className="italic">{pub.journal}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-6 h-6" />
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
  );
};

export default PublicationsList;
