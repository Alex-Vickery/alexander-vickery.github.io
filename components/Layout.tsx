import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Logo = () => (
  <motion.div
    className="relative flex items-center justify-center w-10 h-10 group"
    whileHover="hover"
    whileTap={{ scale: 0.92 }}
  >
    {/* Background geometric shape - using Framer Motion for smoother/slower control */}
    <motion.div
      className="absolute inset-0 bg-gray-900 rounded-xl"
      variants={{
        hover: {
          rotate: 90,
          backgroundColor: "#000000ff", // blue-600
          borderRadius: "14px",
        },
      }}
      initial={{ rotate: 45 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    />

    {/* The initials AV */}
    <div className="relative flex items-center justify-center font-black text-white text-lg tracking-tighter leading-none select-none">
      <span className="translate-x-[1px] translate-y-[-1px]">A</span>
      <span className="translate-x-[-1px] translate-y-[1px]">V</span>
    </div>
  </motion.div>
);

const SocialLink = ({
  href,
  icon: Icon,
  label,
  hoverColor,
  tooltipText,
}: {
  href: string;
  icon: any;
  label: string;
  hoverColor: string;
  tooltipText: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-400 ${hoverColor} transition-all transform hover:scale-110`}
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full mb-3 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold rounded-lg pointer-events-none whitespace-nowrap shadow-xl z-50"
          >
            {tooltipText}
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Publications", path: "/publications" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <nav className="glass-nav sticky top-0 z-50 border-b border-gray-100/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="py-16 border-t border-gray-100 bg-gray-50/30">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Alexander Vickery
          </p>
          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <SocialLink
              href="https://www.linkedin.com/in/alexander-vickery/"
              icon={Linkedin}
              label="LinkedIn"
              hoverColor="hover:text-blue-600"
              tooltipText="LinkedIn Profile"
            />
            <SocialLink
              href="https://github.com/Alex-Vickery"
              icon={Github}
              label="GitHub"
              hoverColor="hover:text-gray-900"
              tooltipText="GitHub Profile"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
