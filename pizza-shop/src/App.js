import logo from './logo.svg';
import './App.css';
import PizzaForm from "./components/PizzaForm.js";
import Order from "./components/Order.js";
import { useState } from 'react';

function App() {
  const [formDisabled, setFormDisabled] = useState(false);

  const disableForm = (status) => {
    setFormDisabled(status);
  }

  return (
    <div className="App">
        <h1 className="pizza-heading">Pizza Form</h1>
      <div className="display">
        <PizzaForm formDisabled={formDisabled} disableForm={disableForm} />
        <Order disableForm={disableForm}/>
      </div>
    </div>
  );
}

export default App;
