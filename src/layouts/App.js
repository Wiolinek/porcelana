import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Shop from "./Shop";

// import '../styles/sass/main.sass';


const App = () => {

    return (
      <Router>
          <Route path="/" component={Main} exact>
              <Main />
          </Route>
          <Route path="/shop" component={Shop} target="_blank" exact>
              <Shop />
          </Route>
      </Router>
    );
}

export default App;
