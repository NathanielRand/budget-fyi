import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
// import toJson from "enzyme-to-json";

test("Should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find("h1").text()).toBe("BudgetFYI");

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
