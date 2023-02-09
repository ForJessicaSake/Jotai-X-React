//button.js
import { useAtom } from "jotai";
import { theme, textColor } from "./atom";

function Button() {
  const [themeValue, setThemeValue] = useAtom(theme);
  const [color, setColor] = useAtom(textColor);
  const handleTheme = () => {
    setThemeValue(themeValue === "black" ? "white" : "black");
    setColor(color === "white" ? "black" : "white");
  };

  return (
    <div className="button">
      <h2>Button theme State Management with Jotai </h2>
      <p>
        This code implements the Jotai Provider feature and demonstrates its
        functionality
      </p>
      <button
        onClick={handleTheme}
        style={{ backgroundColor: themeValue, color: color }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Button;
