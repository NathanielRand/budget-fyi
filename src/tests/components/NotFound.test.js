import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFound";
import { getExpectedBodyHash } from "twilio/lib/webhooks/webhooks";

test("Should render page not found", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
