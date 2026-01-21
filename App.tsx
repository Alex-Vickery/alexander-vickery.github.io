import React from "react";
import {
  HashRouter as Router,
  useRoutes, // Import useRoutes
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PublicationsList from "./pages/PublicationsList";
import PublicationDetail from "./pages/PublicationDetail";

const AnimatedRoutes = () => {
  const location = useLocation();

  // 1. Define routes in an object array
  const element = useRoutes([
    {
      path: "/",
      element: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Home />
        </motion.div>
      ),
    },
    {
      path: "/publications",
      element: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PublicationsList />
        </motion.div>
      ),
    },
    {
      path: "/publication/:id",
      element: (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <PublicationDetail />
        </motion.div>
      ),
    },
  ]);

  // 2. Clone the element to inject the key for AnimatePresence
  // We explicitly check if element exists to satisfy TS
  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;
