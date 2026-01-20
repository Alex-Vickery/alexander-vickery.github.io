import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tighter leading-[0.85] mb-10">
                Alexander <br />
                Vickery
              </h1>

              <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
                >
                  I am a competition economist specialising in antitrust &
                  damages quantification, and (as of 26/01/2026) Director,
                  Disputes & Economics at{" "}
                  <span className="text-gray-900 font-semibold">Ankura</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-8 font-light italic"
                >
                  Former British Academy Postdoctoral Fellow and an Honourary
                  Research Associate at Royal Holloway, University of London.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-8"
                >
                  <Link
                    to="/publications"
                    className="group w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-100 hover:shadow-gray-200 hover:-translate-y-1 active:translate-y-0"
                  >
                    My Publications
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="assets/home/CV.pdf"
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
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* 1. Removed fixed width (w-64, md:w-[475px])
                 2. Kept fixed height (h-64, md:h-[625px])
                 3. Added 'inline-block' so the div shrinks to fit the image width
              */}
              <div className="relative h-64 md:h-[625px] inline-block">
                {/* Removed 'absolute inset-0'. 
                   Now using 'h-full' so it fills the height of the parent 
                */}
                <div className="h-full p-4">
                  <img
                    src="assets/home/AV_45_comp.jpg"
                    alt="Alexander Vickery"
                    loading="eager"
                    /* 1. Changed 'w-full' to 'w-auto' (calculates width based on height)
                       2. kept 'h-full' (locks height to 625px)
                       3. Removed 'object-cover' (no longer needed as we aren't cropping)
                    */
                    className="h-full w-auto rounded-[3.2rem] grayscale-[0] hover:grayscale-0 transition-all duration-700"
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
