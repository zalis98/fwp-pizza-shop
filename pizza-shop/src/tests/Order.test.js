import { render, screen } from "@testing-library/react";
import Order from "../components/Order.js";
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Order/>
  );
})

/**
 * @function OrderTest
 * @description Check the element rendered correctly
 */
test("check element exists on screen", () => {
  expect(getOrders()).toBeInTheDocument();
});

function getOrders(){
  return screen.getByTestId("pizza-orders");
}