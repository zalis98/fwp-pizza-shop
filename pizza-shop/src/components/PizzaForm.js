import "./PizzaForm.css";
// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function PizzaForm() {
  const [options, setOptions] = useState(1);

  // const selectSize = (e) => {
  //   setOptions(e.target.value);
  //   console.log("grabbed value " + e.target.value);
  //   console.log("options: " + options);
  // }

  const handleSize = (val) => {
    setOptions(val);
    // console.log(options);
  }

  return (
    <div className="pizza-form">
      <div>
        <Form className="all-details">
          <div className="pizza-choice">
            <Form.Group>
              {/* https://react-bootstrap.netlify.app/components/buttons/#controlled */}
              <ToggleButtonGroup className="pizza-size" type="radio" name={options} onChange={handleSize} size="lg">
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
            <Form.Group className="toppings">
              <h6>Toppings</h6>

              <Form.Check
                inline
                type="checkbox"
                label="Sausage"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Pepperoni"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Ham"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Olives"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Bacon"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Corn"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Pineapple"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Mushrooms"
              />
            </Form.Group>
          </div>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
          <Form.Group className="details">
            <h5>Customer Details</h5>
            <Row>

              <Col>
                <Form.Control type="text" placeholder="First Name" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Last Name" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Phone Number" />
              </Col>
              <Col>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="details">
            <h5>Delivery Address</h5>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Street" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Apt. Number" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="City" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Floor" />
              </Col>
            </Row>
          </Form.Group>
          {/* </Form.Group> */}
        </Form>
      </div>
    </div>
  )

}

export default PizzaForm;