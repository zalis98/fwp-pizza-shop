import "./Order.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Order(props) {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    function loadPizzas() {
      const currentPizzas = JSON.parse(localStorage.getItem("pizzas"));
      setPizzas(currentPizzas);
    }
    loadPizzas();
  }, [pizzas]);

  const deletePizza = (delPizza) => {
    if (window.confirm("Are you sure you want to delete this pizza?")) {
      const pizzasCopy = [...pizzas];
      const delIndex = pizzasCopy.indexOf(delPizza);
      pizzasCopy.splice(delIndex, 1);
      if (JSON.stringify(pizzasCopy) === "[]") {
        setPizzas([]);
        localStorage.removeItem("pizzas");
      } else {
        setPizzas(pizzas => [...pizzasCopy])
        localStorage.setItem("pizzas", JSON.stringify(pizzasCopy));
      }
    }
  }

  const addPizza = () => {
    props.disableForm(false);
  }

  return (
    <div className="order">
      <h4 className="order-heading">Pizzas order</h4>
      {pizzas !== null ?
        <div className="d-grid gap-2">
          {pizzas.map((x) =>
            <Button className="ordered-pizza" onClick={() => deletePizza(x)}><p className="pizza-type">{x.size} pizza</p><span className="minus">-</span></Button>
          )}
          <Button className="add-pizza" onClick={addPizza}><span className="plus">+</span></Button>
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default Order;