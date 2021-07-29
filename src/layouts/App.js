import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Shop from "./Shop";


const App = () => {

    return (
      <Router>
          <Route exact path="/" component={Main} >
              <Main />
          </Route>
          <Route path="/shop/:categoryLink" component={Shop} target="_blank">
              <Shop />
          </Route>
      </Router>
    );
}

export default App;
