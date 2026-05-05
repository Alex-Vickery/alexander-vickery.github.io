import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[calc(100dvh-134px)] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">
          Error
        </p>
        <div className="text-[11rem] md:text-[16rem] font-extrabold text-gray-100 tracking-tighter leading-none select-none">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight -mt-4 mb-4">
          Page not found
        </h1>
        <p className="text-base text-gray-500 font-light mb-10 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 font-bold text-xs uppercase tracking-widest group transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
