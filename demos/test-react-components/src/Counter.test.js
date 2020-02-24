import React from "react";
import { shallow } from "enzyme";

import Counter from "./Counter";

it("should increment when the button is clicked", () => {
  const wrapper = shallow(<Counter />);
  const button = wrapper.find("button");

  const counterValueBefore = wrapper.find("p").text();
  expect(counterValueBefore).toBe("Current value is: 0");

  button.simulate("click");

  const counterValueAfter = wrapper.find("p").text();
  expect(counterValueAfter).toBe("Current value is: 1");
});
