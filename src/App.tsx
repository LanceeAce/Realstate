import Home from "./components/home";
import About from "./components/About";
import { Header } from "./components/Header";
import Featured from "./components/Featured";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Featured />
      <About />
    </div>
  );
};

export default App;
