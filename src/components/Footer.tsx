// src/components/Footer.tsx

import React from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { XIcon } from "../icons/X";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-xl py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-xs text-slate-500 md:flex-row md:justify-between">

        {/* Left side */}
        <p className="tracking-wide">
          © {new Date().getFullYear()} <span className="text-cyber-cyan">Vasu Goli</span> — Built with Motion.
        </p>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vasugoli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-cyan transition"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/goli-vasu-7769bb2b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-indigo transition"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/vasu00658"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-indigo transition"
            aria-label="X profile"
            title="X profile"
          >
            <XIcon className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
