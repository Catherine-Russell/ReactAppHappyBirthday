import App from '../App.jsx'
import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from "@testing-library/react";

describe("App component", () => {
  it("display Greeting", () => {
    // Given
    const testComponent = (
      <App />
    );

    // When
    render(testComponent);

    // Then
    const appTitle = screen.getByText("Hello There!");
    expect(appTitle).toBeDefined();
  });

  it("has a request for your name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    expect(screen.getByText("What is your name?")).toBeDefined();
  });

  it("has an input box for your name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    expect(screen.getByRole("textbox", { placeholder: "name" })).toBeDefined();
  });

  it("allows the user to type their name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    const inputField = screen.getByRole("textbox", { placeholder: "name"});

    fireEvent.change(inputField, {target: {value: 'Test'}})

    const inputtedName = inputField.value
    expect(inputtedName).toBe("Test"); 
  });

  it("", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    const inputField = screen.getByRole("textbox", { placeholder: "name"});

    fireEvent.change(inputField, {target: {value: 'Test'}})

    const inputtedName = inputField.value
    expect(inputtedName).toBe("Test"); 
  });


}
)