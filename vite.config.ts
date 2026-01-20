import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs"; // Used for debugging

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // --- VERCEL DEBUGGING BLOCK ---
  // This will print to your Vercel Build Logs
  console.log("\n========== VERCEL FILE SYSTEM CHECK ==========");
  console.log("Current Directory:", process.cwd());
  console.log("Files at Root:", fs.readdirSync(process.cwd()));

  if (fs.existsSync("public")) {
    console.log("CONTENTS of 'public' folder:", fs.readdirSync("public"));
    if (fs.existsSync("public/assets")) {
      console.log(
        "CONTENTS of 'public/assets' folder:",
        fs.readdirSync("public/assets")
      );
    } else {
      console.log("WARNING: 'public/assets' does not exist!");
    }
  } else {
    console.log("CRITICAL WARNING: 'public' folder NOT found at root!");
  }
  console.log("==============================================\n");
  // -----------------------------

  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // Fix: Use process.cwd() instead of __dirname
        "@": path.resolve(process.cwd(), "."),
      },
    },
    // Explicitly tell Vite to look for the public dir here
    publicDir: "public",
  };
});
