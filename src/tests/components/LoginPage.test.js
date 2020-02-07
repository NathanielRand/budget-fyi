import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("Should render the Login Page", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
  // Create the spy
  const startLogin = jest.fn();
  // Pass the spy into the login page
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  // Click the button
  wrapper.find("button").simulate("click");
  // Expect spy to have been called
  expect(startLogin).toHaveBeenCalled();
});
