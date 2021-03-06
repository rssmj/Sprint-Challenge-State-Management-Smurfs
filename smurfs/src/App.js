import React from "react";
import "./App.css";
import SmurfList from './components/SmurfList.js';
import SmurfForm from './components/SmurfForm.js';


function App() {
    return (
      <div className='App'>
        <h1 className='titleSmurfs'>SMURFS!</h1>
          <SmurfForm />
          <SmurfList />
        </div>
    );
  }


export default App;
