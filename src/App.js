import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/movieDetail";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import Footer from "./components/Footer/footer";
import Login from "./components/Auth/login";

function App() {
  return (
    <Box>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route exact path={"/login"} component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer></Footer>
    </Box>
  );
}

export default App;
