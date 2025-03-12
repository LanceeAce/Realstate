
import About from "./components/About";
import Description from "./components/Description";
import { Header } from "./components/Header";
import Featured from "./components/Featured";
import Feedback from "./components/Feedback";
import { Routes, Route } from "react-router-dom";
import Market from "./pages/Market";
import Home from "./components/home";
import Footer from "./components/Footer";
import Copy from "./components/Copy";

const App = () => {
  return (
    <div>
      
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
            <Header />
              <Home />
              <Description />
              <Featured />
              <Feedback />
              <About />
              <Footer/>
              <Copy />
            </>
          }
        />

        {/* Market Page */}
        <Route path="/market" element={<Market />} />
      </Routes>
    </div>
  );
};

export default App;
