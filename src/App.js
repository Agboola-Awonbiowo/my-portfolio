import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      {/* <Home /> */}
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
