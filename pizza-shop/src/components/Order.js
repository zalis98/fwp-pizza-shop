import "./Order.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Order() {

  const [pizzas, setPizzas] = useState(JSON.parse(localStorage.getItem("pizzas")));
  console.log(pizzas);

  return (
    <div className="order">
      <h4 className="order-heading">Pizzas order</h4>
      <div className="d-grid gap-2">
        {pizzas.map((x) =>
        <div>{x.size}</div>)
    }
        <Button className="ordered-pizza"></Button>
        <Button className="add-pizza"><span className="plus">+</span></Button>
      </div>
    </div>
  )
}

export default Order;