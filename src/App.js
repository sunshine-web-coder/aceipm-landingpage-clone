import "./App.scss";
import Footer from "./component/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import ScrollToTop from "./component/ScrollToTop";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Counsel from "./pages/Counsel";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/counselling" element={<Counsel />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refunds" element={<RefundPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      {location.pathname !== "/course" && <Footer />}
    </div>
  );
}

export default App;
