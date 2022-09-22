import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("Default props work", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("Hello World");
  });

  it("Second prop check", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.props().msg).toBe("Hello World");
  });

  it("Just a prop example", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.props().msg).toBe(wrapper.vm.msg);
  });

  it("Custom props work", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });

  it("Clicks", async () => {
    const { getByText } = render(HelloWorld);

    getByText("Clicked: 0");
    const button = getByText("Click");
    await fireEvent.click(button);
    await fireEvent.click(button);
    getByText("Clicked: 2");
  });
});

it("Basics", () => {
  const fn = vi.fn();

  fn("hello", 1);

  expect(vi.isMockFunction(fn)).toBe(true);
  expect(fn.mock.calls[0]).toEqual(["hello", 1]);

  fn.mockImplementation((arg) => arg);

  fn("world", 2);

  expect(fn.mock.results[1].value).toBe("world");
});
