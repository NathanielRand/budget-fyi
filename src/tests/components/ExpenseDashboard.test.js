import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/Dashboard";

test("Should render the Expenses Dashboard", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
