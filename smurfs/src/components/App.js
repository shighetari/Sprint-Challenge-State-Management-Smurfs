import React, { Component } from "react";
import "./App.css";
//my imports
import { createStore, applyMiddleware } from "redux"
import { smurfReducer } from "../reducers/smurfReducer";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const store = createStore(smurfReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm />
          <SmurfList />
        </div>
      </Provider>
    );
  }
}

export default App;
