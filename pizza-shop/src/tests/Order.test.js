import { render, screen } from "@testing-library/react";
import Order from "../components/Order.js";
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Order/>
  );
})

/**
 * Check the element rendered correctly
 */
test("check element exists on screen", () => {
  expect(getOrders()).toBeInTheDocument();
});


// initialise element getter
function getOrders(){
  return screen.getByTestId("pizza-orders");
}