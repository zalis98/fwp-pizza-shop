import "./Order.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

/**
 * @function Order
 * @description Displays current pizza orders
 * @param {Object} props Imports items from parent component: state and setState methods regarding disabled Form
 * @returns Rendering of function
 */
function Order(props) {

  const [pizzas, setPizzas] = useState([]);

  /**
   * @function useEffect
   * @description Executes whenever the component state updates
   */
  useEffect(() => {
    async function loadPizzas() {

      const currentPizzas = await JSON.parse(localStorage.getItem("pizzas"));
      if (currentPizzas) {
        setPizzas(currentPizzas);
      }

    }
    loadPizzas();
  }, [props.formDisabled]);

  /**
   * @function deletePizza
   * @description Deletes pizza from localStorage
   * @param {Object} delPizza Pizza to be deleted
   */
  const deletePizza = (delPizza) => {
    if (window.confirm("Are you sure you want to delete this pizza?")) {
      const pizzasCopy = [...pizzas];
      const delIndex = pizzasCopy.indexOf(delPizza);
      pizzasCopy.splice(delIndex, 1);
      if (JSON.stringify(pizzasCopy) === "[]") {
        setPizzas([]);
        localStorage.removeItem("pizzas");
        props.disableForm(false);
      } else {
        setPizzas(pizzas => [...pizzasCopy])
        localStorage.setItem("pizzas", JSON.stringify(pizzasCopy));
      }
    }
  };

  /**
   * @function addPizza
   * @description Sets formDisabled to false so user can add another pizza
   */
  const addPizza = () => {
    props.disableForm(false);
  }

  return (
    <div className="order" data-testid="pizza-orders">
      <h4 className="order-heading">Pizzas order</h4>
      {pizzas.length !== 0 ?
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
  );
};

export default Order;