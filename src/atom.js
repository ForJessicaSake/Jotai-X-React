// atom.js
import { atom } from "jotai";

// atom to manage the theme of the app
const theme = atom(true);
// atom to manage the themetext of the app
const textColor = atom(true);

export {  theme, textColor};