import logo from './logo.svg';
import './App.css';
import PizzaForm from "./components/PizzaForm.js";
import Order from "./components/Order.js";

function App() {
  return (
    <div className="App">
        <h1 className="pizza-heading">Pizza Form</h1>
      <div className="display">
        <PizzaForm />
        <Order />
      </div>
    </div>
  );
}

export default App;
