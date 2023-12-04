import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";


it("Czy h1 się renderuje", () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").exists()).toBe(true)
})

it("Czy h2 się renderuje", () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find("h2").exists()).toBe(true)
})

it("Czy h3 się renderuje", () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find("h3").exists()).toBe(true)
})
