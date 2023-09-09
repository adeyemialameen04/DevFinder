import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
    </ThemeContextProvider>
  );
}

export default App;
