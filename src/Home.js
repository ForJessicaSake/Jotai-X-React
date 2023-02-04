import { useAtom } from "jotai";
import { theme } from "./atom";
const Home = () => {
  const [themeValue, setThemeValue] = useAtom(theme);
  const handleTheme = () => {
    setThemeValue(!themeValue);
    document.body.style.backgroundColor = themeValue ? "black" : "white";
    document.body.style.color = themeValue ? "white" : "black";
  };

  return (
    <section>
      <nav>
        <h1 className="logo">Jotai</h1>
        <button onClick={handleTheme}>
          Toggle Theme
        </button>
      </nav>
      <section className="home">
        <h1 className="heading">State theme management with Jotai</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          aliquid voluptatibus molestias sint voluptates ad quo provident illum
          alias harum repellendus nam, eius dolorem expedita maxime. Repellat,
          dolorem commodi, optio fugit libero et quia provident assumenda ex
          quas aut unde. Nostrum, optio. Assumenda consequuntur recusandae modi
          sunt, sit officia explicabo.
        </p>
      </section>
    </section>
  );
};

export default Home;
