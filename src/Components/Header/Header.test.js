import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Header from "./Header";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should click button", () => {
    let isFetching = false;
    const loadData = jest.fn();

    act(() => {
        render(<Header loadData={loadData} isFetching={isFetching}/>, container);
    });

    const buttonSmall = document.querySelector("#small");
    const buttonBig = document.querySelector("#big");
    const loading = document.querySelector(".spinner-border");
    expect(buttonSmall.innerHTML).toBe("Small data");
    expect(buttonBig.innerHTML).toBe("Big data");
    expect(loading).toBe(null);

    act(() => {
        buttonSmall.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        buttonBig.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });

    expect(loadData).toHaveBeenCalledTimes(2);
});

it("should disabled button and show spinner", () => {
    let isFetching = true;
    const loadData = jest.fn();

    act(() => {
        render(<Header loadData={loadData} isFetching={isFetching}/>, container);
    });

    const buttonSmall = document.querySelector("#small");
    const buttonBig = document.querySelector("#big");
    const loading = document.querySelector(".spinner-border") && true;
    expect(buttonSmall.innerHTML).toBe("Small data");
    expect(buttonBig.innerHTML).toBe("Big data");
    expect(loading).toBe(true);

    expect(buttonSmall.disabled).toBe(true);
    expect(buttonBig.disabled).toBe(true);
});