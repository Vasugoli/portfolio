// src/utils/gsapSetup.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Observer from "gsap/Observer";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer, TextPlugin);

export { gsap, ScrollTrigger, ScrollToPlugin, Observer, TextPlugin };
