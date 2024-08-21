import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  const [theme, setTheme] = useState("light"); 

  const darkTheme = () =>{
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeProvider value={{theme , darkTheme , lightTheme}}>
      <div className="w-full h-screen bg-white flex justify-center items-center dark:bg-blue-500 ">
        <div className="flex-row-reverse ">
       <Card />
       <ThemeBtn className=""/>   
        </div>
       </div>
    </ThemeProvider>
  );
};

export default App;
