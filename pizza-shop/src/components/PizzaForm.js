import "./PizzaForm.css";
// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function PizzaForm() {
  const [sizeOption, setSizeOption] = useState({});
  const [toppingOptions, setToppingOptions] = useState([]);
  const [nameInput, setNameInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: null
  });
  const [addressInput, setAddressInput] = useState({
    street: "",
    aptNumber: null,
    city: "",
    floor: null
  });

  const handleSize = (val) => {
    setSizeOption(val);
  }

  const handleTopping = (e) => {
    if (e.target.checked) {
      setToppingOptions(toppingOptions => [...toppingOptions, e.target.name])
    } else if (!e.target.checked) {
      for (let i = 0; i < toppingOptions.length; i++) {
        if (e.target.name === toppingOptions[i]) {
          const toppingsCopy = [...toppingOptions];
          const toppingIndex = toppingsCopy.indexOf(e.target.name);
          toppingsCopy.splice(toppingIndex, 1);
          setToppingOptions(toppingOptions => [...toppingsCopy]);
        }
      }
    }
  }

  const getNameData = (e) => {
    const { value, name } = e.target;
    setNameInput(() => {
      return {
        ...nameInput,
        [name]: value
      }
    });
  }

  const getAddressData = (e) => {
    const { value, name } = e.target;
    setAddressInput(() => {
      return {
        ...addressInput,
      [name]: value
      }
    });
  }

  const submitOrder = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber } = nameInput;
    const { street, aptNumber, city, floor } = addressInput;

    if (sizeOption !== 1 && sizeOption !== 2 && sizeOption !== 3) {
      window.alert("Pizza size must be chosen");
      return;
    } else if (toppingOptions.length < 2) {
      window.alert("A minimum of two toppings must be chosen");
      return;
    } else if (!firstName || !lastName || !phoneNumber) {
      window.alert("All customer details are compulsory");
      return;
    } else if (!street || !aptNumber || !city || !floor) {
      window.alert("All delivery address details are compulsory");
      return;
    } else if (phoneNumber.substring(0,5) !== "+61 4" || phoneNumber.length !== 15) {
      window.alert("Phone number must be of the format +61 4xx xxx xxx");
      return;
    } else if (aptNumber < 1) {
      window.alert("Apartment number must be a positive whole number");
      return;
    } else if (floor < 1) {
      window.alert("Floor number must be a positive whole number");
    } else {
      const order = {
        size: sizeOption,
        toppings: toppingOptions,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        street: street,
        aptNumber: aptNumber,
        city: city,
        floor: floor
      }
      console.log(order);
      appendLocalStorage("pizzas", JSON.stringify(order));
    }
  }

  const appendLocalStorage = (keyVal, data) => {
    let old = localStorage.getItem(keyVal);
    if (old === null) {
      localStorage.setItem(keyVal, "[" + data + "]");
    } else {
      const oldData = old.substring(1, old.length - 1);
      localStorage.setItem(keyVal, "[" + oldData + "," + data + "]");
    }
  }

  return (
    <div className="pizza-form">
      <Form onSubmit={submitOrder}>
        <div className="pizza-choice">
          <Form.Group>
            {/* https://react-bootstrap.netlify.app/components/buttons/#controlled */}
            <ToggleButtonGroup className="pizza-size" type="radio" name={sizeOption} onChange={handleSize} size="lg">
              <ToggleButton className="size-button" id="tbg-btn-1" value={1}>
                SMALL
              </ToggleButton>
              <ToggleButton className="size-button" id="tbg-btn-2" value={2}>
                MEDIUM
              </ToggleButton>
              <ToggleButton className="size-button" id="tbg-btn-3" value={3}>
                LARGE
              </ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
          <Form.Group className="toppings" onChange={handleTopping}>
            <h6>Toppings</h6>

            <Form.Check
              inline
              type="checkbox"
              label="Sausage"
              name="Sausage"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Pepperoni"
              name="Pepperoni"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Ham"
              name="Ham"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Olives"
              name="Olives"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Bacon"
              name="Bacon"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Corn"
              name="Corn"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Pineapple"
              name="Pineapple"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Mushrooms"
              name="Mushrooms"
            />
          </Form.Group>
        </div>
        <div className="all-details">

          <Form.Group className="details">
            <h5>Customer Details</h5>
            <Row>

              <Col>
                <Form.Control type="text" name="firstName" onChange={getNameData} placeholder="First Name" />
              </Col>
              <Col>
                <Form.Control type="text" name="lastName" onChange={getNameData} placeholder="Last Name" />
              </Col>
              <Col>
                <Form.Control type="text" name="phoneNumber" onChange={getNameData} /*value={formatPhoneNumber}*/ placeholder="Phone Number" />
              </Col>
              <Col>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="details">
            <h5>Delivery Address</h5>
            <Row>
              <Col>
                <Form.Control type="text" name="street" onChange={getAddressData} placeholder="Street" />
              </Col>
              <Col>
                <Form.Control type="number" name="aptNumber" onChange={getAddressData} placeholder="Apt. Number" />
              </Col>
              <Col>
                <Form.Control type="text" name="city" onChange={getAddressData} placeholder="City" />
              </Col>
              <Col>
                <Form.Control type="number" name="floor" onChange={getAddressData} placeholder="Floor" />
              </Col>
            </Row>
          </Form.Group>
        </div>
        <div className="button-div">

          <Button className="pizza-submit" variant="primary" type="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  )

}

export default PizzaForm;