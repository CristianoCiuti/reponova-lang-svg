/**
 * @reponova/lang-svg — entry point.
 *
 * Exports the LanguagePlugin for SVG diagram support.
 */
import type { LanguagePlugin } from "reponova";
import { SvgExtractor } from "./extractor.js";

export const plugin: LanguagePlugin = {
  id: "svg",
  extensions: [".svg"],
  extractor: new SvgExtractor(),
};

export { SvgExtractor };
