import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
