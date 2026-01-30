import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] flex items-center justify-center lg:overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-0 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tighter leading-[0.85] mb-8 lg:mb-10">
                Alexander <br />
                Vickery
              </h1>

              <div className="space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
                >
                  I am a competition economist specialising in antitrust &
                  damages quantification, and Director, Disputes & Economics at{" "}
                  <span className="text-gray-900 font-semibold">Ankura</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base lg:text-lg text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6 lg:pl-8 font-light italic"
                >
                  Former British Academy Postdoctoral Fellow at Royal Holloway,
                  University of London.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 lg:pt-8"
                >
                  <Link
                    to="/publications"
                    className="group w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-100 hover:shadow-gray-200 hover:-translate-y-1 active:translate-y-0"
                  >
                    My Publications
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="/assets/home/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border border-gray-200 hover:border-gray-900 transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                  >
                    <Download className="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    Current CV
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Responsive container for the image - max height prevents scrolling on shorter screens */}
              <div className="relative h-64 md:h-[400px] lg:h-auto lg:max-h-[55vh] flex items-center justify-center">
                <div className="p-4 h-full">
                  <img
                    src="/assets/home/AV_45_comp.jpg"
                    alt="Alexander Vickery"
                    loading="eager"
                    className="h-full w-auto max-h-full object-contain rounded-[2.5rem] lg:rounded-[3.2rem] transition-all duration-700 shadow-2xl shadow-gray-200"
                    style={{
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
