import React from "react";
import Radio from "./Radio";

export default {
  title: "Components Assignment/Radio",
  component: Radio,
};

export const Default = () => (
  <>
    <label htmlFor="radio1">
      <Radio id="radio1" name="decision" value="yes" />
      Yes
    </label>
    <label htmlFor="radio2">
      <Radio id="radio2" name="decision" value="no" />
      No
    </label>
  </>
);

export const Disabled = () => (
  <>
    <label htmlFor="radio3">
      <Radio id="radio3" name="decision" value="yes" disabled />
      Yes
    </label>
    <label htmlFor="radio4">
      <Radio id="radio4" name="decision" value="no" disabled />
      No
    </label>
  </>
);
