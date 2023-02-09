// Home.js
import { useAtom } from "jotai";
import { theme } from "./atom";
import "./App.css";

const Home = () => {
  // Retrieving the current theme value
  const [themeValue, setThemeValue] = useAtom(theme);

  // Function to toggle the theme
  const handleTheme = () => {
    setThemeValue(!themeValue);
    document.body.style.backgroundColor = themeValue ? "black" : "white";
    document.body.style.color = themeValue ? "white" : "black";
  };

  return (
    <section>
      <nav>
        {/* Logo */}
        <h1 className="logo">Jotai</h1>
        {/* Button to toggle the theme */}
        <button onClick={handleTheme}>Toggle Theme</button>
      </nav>
      <section className="home">
        <h1 className="heading">State theme management with Jotai</h1>
        <p>
          This code showcases the implementation of Jotai's atom and useAtom
          features for efficient state theme management. It demonstrates the
          ease and simplicity of managing themes within an application.
        </p>
      </section>
    </section>
  );
};

export default Home;
