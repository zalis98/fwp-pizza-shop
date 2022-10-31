import { render, screen } from "@testing-library/react";
import PizzaForm from "../components/PizzaForm.js";
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <PizzaForm/>
  );
})

/**
 * @function PizzaFormTest
 * @description Checks that each element in the pizza order form is displayed on the screen
 */
test("check elements exist on screen", () => {
  expect(getRadio()).toBeInTheDocument();

  expect(getCheckboxes()).toBeInTheDocument();

  expect(getCusDetails()).toBeInTheDocument();

  expect(getAddDetails()).toBeInTheDocument();

  expect(getSubmitButton()).toBeInTheDocument();

});

function getRadio(){
  return screen.getByTestId("radio-buttons");
}

function getCheckboxes() {
  return screen.getByTestId("checkboxes");
}

function getCusDetails() {
  return screen.getByTestId("cus-details");
}

function getAddDetails() {
  return screen.getByTestId("add-details");
}

function getSubmitButton() {
  return screen.getByTestId("submit-button");
}