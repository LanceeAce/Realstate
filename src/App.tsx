import Home from "./components/home";
import About from "./components/About";

import Description from "./components/Description";

import { Header } from "./components/Header";
import Featured from "./components/Featured";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Description />
      <Featured />
      <Feedback />
      <About />
      
    </div>
  );
};

export default App;
