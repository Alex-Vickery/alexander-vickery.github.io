import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { publications } from "../data/publications";
import { PublicationStatus } from "../types";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Code,
  Copy,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Share2,
} from "lucide-react";

const BibtexHighlighter: React.FC<{ code: string }> = ({ code }) => {
  // Simple regex-based highlighting for BibTeX format
  const lines = code.split("\n");

  return (
    <pre className="relative p-8 bg-[#0d1117] text-[#c9d1d9] rounded-[2.2rem] overflow-x-auto text-sm leading-relaxed font-mono shadow-2xl border border-gray-800">
      <code>
        {lines.map((line, idx) => {
          // Identify the components of a BibTeX line
          // 1. @type
          if (line.trim().startsWith("@")) {
            const typeMatch = line.match(/^(@\w+)\{(.*),/);
            if (typeMatch) {
              return (
                <div key={idx}>
                  <span className="text-[#ff7b72]">{typeMatch[1]}</span>
                  <span className="text-gray-400">{"{"}</span>
                  <span className="text-[#d2a8ff]">{typeMatch[2]}</span>
                  <span className="text-gray-400">,</span>
                </div>
              );
            }
          }

          // 2. field = {value}
          const fieldMatch = line.match(/^(\s*)(\w+)(\s*=\s*)\{(.*)\}(,?)/);
          if (fieldMatch) {
            return (
              <div key={idx}>
                <span className="whitespace-pre">{fieldMatch[1]}</span>
                <span className="text-[#79c0ff]">{fieldMatch[2]}</span>
                <span className="text-gray-400">{fieldMatch[3]}</span>
                <span className="text-gray-400">{"{"}</span>
                <span className="text-[#a5d6ff]">{fieldMatch[4]}</span>
                <span className="text-gray-400">{"}"}</span>
                <span className="text-gray-400">{fieldMatch[5]}</span>
              </div>
            );
          }

          // 3. field = value (numeric/unbraced)
          const numericMatch = line.match(/^(\s*)(\w+)(\s*=\s*)([^,{}]+)(,?)/);
          if (numericMatch) {
            return (
              <div key={idx}>
                <span className="whitespace-pre">{numericMatch[1]}</span>
                <span className="text-[#79c0ff]">{numericMatch[2]}</span>
                <span className="text-gray-400">{numericMatch[3]}</span>
                <span className="text-[#ffad66]">{numericMatch[4]}</span>
                <span className="text-gray-400">{numericMatch[5]}</span>
              </div>
            );
          }

          // 4. Closing brace
          if (line.trim() === "}") {
            return (
              <div key={idx} className="text-gray-400">
                {"}"}
              </div>
            );
          }

          return <div key={idx}>{line}</div>;
        })}
      </code>
    </pre>
  );
};

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pub = publications.find((p) => p.id === id);

  if (!pub) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">Publication not found.</h2>
        <Link
          to="/publications"
          className="mt-4 text-blue-600 inline-block font-bold"
        >
          Back to publications
        </Link>
      </div>
    );
  }

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pub.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto px-6 py-12 md:py-20"
      >
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 font-bold text-xs uppercase tracking-widest group transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to research
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-all"
            title="Share Paper"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <header className="mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
                {pub.status}
              </div>
              <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                {pub.title}
              </h1>
              {pub.subtitle && (
                <p className="text-2xl text-gray-400 mt-4 font-light italic">
                  {pub.subtitle}
                </p>
              )}
            </header>

            <section className="mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center">
                <span className="w-8 h-px bg-blue-200 mr-4"></span>
                Abstract
              </h2>
              <p className="text-xl md:text-base text-gray-600 leading-relaxed font-light">
                {pub.abstract}
              </p>
            </section>

            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center">
                  <span className="w-8 h-px bg-gray-200 mr-4"></span>
                  BibTeX
                </h2>
                <button
                  onClick={handleCopyBibtex}
                  className="flex items-center text-[10px] font-black text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg"
                >
                  {copied ? (
                    <CheckCircle2 className="mr-2 w-3.5 h-3.5" />
                  ) : (
                    <Copy className="mr-2 w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <BibtexHighlighter code={pub.bibtex} />
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-10">
              <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl shadow-gray-100/50 space-y-8">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4">
                  About
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                        Authors
                      </div>
                      <div className="text-sm text-gray-900 font-bold mt-1">
                        {pub.authors.map((author, index) => (
                          <div key={index}>{author}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                        Year
                      </div>
                      <div className="text-sm text-gray-900 font-bold mt-1">
                        {pub.year}
                      </div>
                    </div>
                  </div>

                  {pub.journal && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                          Journal
                        </div>
                        <div className="text-sm text-gray-900 font-bold mt-1 italic">
                          {pub.journal}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {pub.status !== PublicationStatus.WORK_IN_PROGRESS && (
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-6">
                    Downloads
                  </h3>
                  <div className="grid gap-3">
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 bg-gray-900 text-white rounded-3xl hover:bg-black hover:-translate-y-1 transition-all shadow-lg group"
                      >
                        <div className="flex items-center font-bold text-sm">
                          <FileText className="mr-3 w-5 h-5 text-blue-400" />
                          Journal Article
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                      </a>
                    )}
                    {pub.workingPaperUrl && (
                      <a
                        href={pub.workingPaperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-3xl hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition-all shadow-sm group"
                      >
                        <div className="flex items-center font-bold text-sm">
                          <FileText className="mr-3 w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                          Working Paper
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-3xl hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition-all shadow-sm group"
                      >
                        <div className="flex items-center font-bold text-sm">
                          <Code className="mr-3 w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                          Replication Code
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
};

export default PublicationDetail;
