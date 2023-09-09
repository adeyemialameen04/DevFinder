import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      Hello
      <Navbar />
    </ThemeContextProvider>
  );
}

export default App;
