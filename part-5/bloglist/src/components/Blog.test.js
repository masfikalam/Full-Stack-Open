import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

let component;
beforeEach(() => {
  const blog = {
    title: "Hello Saturn",
    author: "Masfik Alam",
    url: "https://fb.com",
    user: "21asic2oaDAc3",
    likes: 21,
  };

  component = render(<Blog blog={blog} />);
});

describe("render elements properly", () => {
  test("display blog title and author", () => {
    const div = component.container.querySelector(".blog");

    expect(div).toHaveTextContent("Hello Saturn");
    expect(div).toHaveTextContent("Masfik Alam");
    expect(div).not.toHaveTextContent("https://fb.com");
    expect(div).not.toHaveTextContent("21");
  });

  test("display blog url and likes", () => {
    const div = component.container.querySelector(".blog");
    const button = component.getByText("view");
    fireEvent.click(button);

    expect(div).toHaveTextContent("https://fb.com");
    expect(div).toHaveTextContent("21");
  });
});

describe("add and like blogs", () => {
  test("click button twice", async () => {
    const div = component.container.querySelector(".blog");
    const button = component.getByText("view");
    fireEvent.click(button);

    const likeBtn = component.getByText("like");
    fireEvent.click(likeBtn);

    expect(div).toHaveTextContent("21");
  });

  test("submit blog form", async () => {
    const setBlogs = jest.fn();

    const comp = render(<BlogForm setBlogs={setBlogs} />);

    const form = comp.container.querySelector("#form");
    const author = comp.container.querySelector("#author");
    const title = comp.container.querySelector("#title");
    const url = comp.container.querySelector("#url");

    fireEvent.change(author, {
      target: { value: "Masfik Alam" },
    });
    fireEvent.change(title, {
      target: { value: "Hello Sun" },
    });
    fireEvent.change(url, {
      target: { value: "https://youtube.com" },
    });
    await fireEvent.submit(form);

    const div = component.container.querySelector(".blog");

    expect(div).toHaveTextContent("Hello Saturn");
  });
});
