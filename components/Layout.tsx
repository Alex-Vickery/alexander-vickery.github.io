import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const Logo = () => (
  <motion.div
    className="relative flex items-center justify-center w-10 h-10 group"
    whileHover="hover"
    whileTap={{ scale: 0.92 }}
  >
    {/* Background geometric shape */}
    <motion.div
      className="absolute inset-0 bg-gray-900 rounded-xl"
      variants={{
        hover: {
          rotate: 90,
          backgroundColor: "#000000ff",
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

const OrcidIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    {/* Main Circle Background */}
    <path d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z" />
    {/* Inner white "iD" elements */}
    <g fill="white">
      {/* "i" stem */}
      <path d="M86.3,186.2H70.9V79.1h15.4V186.2z" />
      {/* "i" dot */}
      <path d="M78.6,73.2c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.8,9.7-9.8c5.4,0,9.8,4.4,9.8,9.8C88.4,68.8,84,73.2,78.6,73.2z" />
      {/* "D" shape with cutout using even-odd rule */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.1,0,44.8-25.1,44.8-40c0-19.9-11.4-39.6-44.1-39.6h-25.2V172.4z"
      />
    </g>
  </svg>
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
    <div className="min-h-screen flex flex-col relative bg-white">
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

      <main className="flex-grow pb-24 lg:pb-0">{children}</main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 py-6 border-t border-gray-100/30 glass-nav">
        <div className="max-w-5xl mx-auto px-6 flex flex-row justify-between items-center text-sm">
          <p className="text-gray-400 font-medium text-[10px] md:text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Alexander Vickery
          </p>
          <div className="flex items-center space-x-6">
            <SocialLink
              href="https://scholar.google.com/citations?user=vsnVSWkAAAAJ&hl=en&oi=ao"
              icon={GraduationCap}
              label="Google Scholar"
              hoverColor="hover:text-blue-500"
              tooltipText="Google Scholar"
            />
            <SocialLink
              href="https://orcid.org/0000-0001-8009-7946"
              icon={OrcidIcon}
              label="ORCID"
              hoverColor="hover:text-[#A6CE39]"
              tooltipText="ORCID Profile"
            />
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
