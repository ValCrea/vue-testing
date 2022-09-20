import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
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
});
