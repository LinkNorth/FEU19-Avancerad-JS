import React from "react";
import { shallow } from "enzyme";

import List from "./List";

describe("List", () => {
  it("should have the correct class", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.hasClass("List")).toBe(true);
  });
});
