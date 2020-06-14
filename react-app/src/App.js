import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store"
import { Provider } from "react-redux" 
import Bugs from './components/Bugs';
import { Container } from "@material-ui/core"

function App() {
  return (
    <Provider store = {store}>
      <Container maxWidth = "lg">
      <Bugs />

         </Container>
      
    </Provider>
  );
}

export default App;
