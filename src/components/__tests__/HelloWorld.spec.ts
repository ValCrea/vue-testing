import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("Default props work", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("Hello World");
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
