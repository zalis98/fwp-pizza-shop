import "./Order.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Order() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    function loadPizzas() {
      const currentPizzas = JSON.parse(localStorage.getItem("pizzas"));
      setPizzas(currentPizzas);
    }
    loadPizzas();
  }, [pizzas]);

  return (
    <div className="order">
      <h4 className="order-heading">Pizzas order</h4>
      <div className="d-grid gap-2">
        {pizzas.map((x) =>
          <Button className="ordered-pizza"><p className="pizza-type">{x.size} pizza</p><span className="minus">-</span></Button>
        )}
        <Button className="add-pizza"><span className="plus">+</span></Button>
      </div>
    </div>
  )
}

export default Order;