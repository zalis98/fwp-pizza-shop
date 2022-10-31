import './App.css';
import PizzaForm from "./components/PizzaForm.js";
import Order from "./components/Order.js";
import { useState } from 'react';

/**
 * @function App
 * @description Outer component to display pizza form and orders
 * @returns Rendering of function
 * @module
 */
function App() {

  /**
   * @const formDisabled
   * @description Sets form to disabled or not
   * @type {boolean}
   */
  const [formDisabled, setFormDisabled] = useState(false);

  /**
   * @function disableForm
   * @description Set whether form is disabled or not
   * @param {boolean} status True or false value to set formDisabled to
   */
  const disableForm = (status) => {
    setFormDisabled(status);
  };

  return (
    <div className="App">
      <h1 className="pizza-heading">Pizza Form</h1>
      <div className="display">
        <PizzaForm formDisabled={formDisabled} disableForm={disableForm} />
        <Order formDisabled={formDisabled} disableForm={disableForm} />
      </div>
    </div>
  );
};

export default App;
