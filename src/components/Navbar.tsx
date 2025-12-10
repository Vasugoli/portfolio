import React, { useState } from "react";
import { FileIcon } from "../icons/File";

export interface NavbarProps {
  logoRef: React.RefObject<HTMLSpanElement>;
  linksRef: React.RefObject<HTMLDivElement>;
  shellRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({ logoRef, linksRef, shellRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={shellRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center"
    >
      <nav className="pointer-events-auto relative mt-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 shadow-[0_0_40px_rgba(15,23,42,0.95)] backdrop-blur-xl md:px-6">
        {/* Logo */}
        <span
          ref={logoRef}
          className="text-sm font-semibold tracking-[0.35em] text-cyber-cyan md:text-base"
        >
          VASU GOLI
        </span>

        {/* Desktop links */}
        <div
          ref={linksRef}
          className="hidden items-center gap-6 text-[11px] font-mono text-slate-300 md:flex"
        >
          <a href="#about" className="transition hover:text-cyber-cyan">
            ABOUT
          </a>
          <a href="#skills" className="transition hover:text-cyber-indigo">
            SKILLS
          </a>
          <a href="#projects" className="transition hover:text-cyber-indigo">
            PROJECTS
          </a>
          <a href="#contact" className="transition hover:text-slate-50">
            CONTACT
          </a>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 px-3 py-1 text-[10px] text-cyber-cyan transition hover:bg-cyber-cyan/20 hover:text-cyan-200"
          >
            <FileIcon className="mr-1 inline h-4 w-4" />
            RESUME
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 block h-0.5 w-full rounded bg-slate-200 transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded bg-slate-200 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded bg-slate-200 transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
              }`}
            />
          </div>
        </button>

        {/* Mobile dropdown (inside nav, positioned top-right) */}
        {isOpen && (
          <div className="absolute right-2 top-12 w-60 rounded-3xl border border-slate-800 bg-slate-950/95 px-4 py-4 text-[11px] font-mono text-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.95)] md:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-2 py-1 transition hover:bg-slate-800/80 hover:text-cyber-cyan"
              >
                ABOUT
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-2 py-1 transition hover:bg-slate-800/80 hover:text-cyber-indigo"
              >
                SKILLS
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-2 py-1 transition hover:bg-slate-800/80 hover:text-cyber-indigo"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-2 py-1 transition hover:bg-slate-800/80 hover:text-slate-50"
              >
                CONTACT
              </a>

              <a
                href="https://drive.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 px-3 py-1.5 text-[10px] text-cyber-cyan transition hover:bg-cyber-cyan/20 hover:text-cyan-200"
              >
                <FileIcon className="h-3.5 w-3.5" />
                <span>RESUME</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
