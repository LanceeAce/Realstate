import Home from "./components/home";
import About from "./components/About";

import Description from "./components/Description";

import { Header } from "./components/Header";
import Featured from "./components/Featured";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Featured />
      <About />
      <Description />
    </div>
  );
};

export default App;
