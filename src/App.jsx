import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Header />
    </ThemeContextProvider>
  );
}

export default App;
