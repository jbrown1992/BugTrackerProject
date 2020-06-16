import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store"
import { Provider } from "react-redux" 
import Bugs from './components/Bugs';
import { Container } from "@material-ui/core"
import { ToastProvider } from "react-toast-notifications"

function App() {
  return (
    <Provider store = {store}>
      <ToastProvider autoDismiss= {true}>
      <Container maxWidth = "xl">
      <Bugs />

         </Container>
         </ToastProvider>
    </Provider>
  );
}

export default App;
