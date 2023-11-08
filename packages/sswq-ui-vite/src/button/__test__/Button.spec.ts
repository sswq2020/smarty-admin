import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount  @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("bg-blue-500")
    ).toBeGreaterThan(-1);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("hover:bg-blue-400")
    ).toBeGreaterThan(-1);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("border-blue-500")
    ).toBeGreaterThan(-1);
  });

  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("bg-red-500")
    ).toBeGreaterThan(-1);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("hover:bg-red-400")
    ).toBeGreaterThan(-1);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        ?.indexOf("border-red-500")
    ).toBeGreaterThan(-1);
  });

  test("loading", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        loading: true,
      },
    });
    expect(wrapper.props("loading")).toBe(true);
  });
});

describe("icon",()=>{
  test("icon-search",()=>{
    const wrapper = shallowMount(Button,{
     slots:{
       default:'Button',
     },
     props:{
       icon:'search',
     },
    });
    expect(wrapper?.element?.innerHTML?.indexOf('i-ic-baseline-search')).toBeGreaterThan(-1);
   })
})