import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Loader />
    </ThemeContextProvider>
  );
}

export default App;
