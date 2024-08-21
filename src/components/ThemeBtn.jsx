import useTheme from "../contexts/theme";

const ThemeBtn = () => {
    const {theme , darkTheme , lightTheme} = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div>
      <button className="bg-green-300 w-40 rounded-xl py-3" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeBtn;
