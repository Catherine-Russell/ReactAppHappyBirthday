import App from '../App.jsx'
import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from "@testing-library/react";

describe("App component", () => {
  it("display Greeting", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    const appTitle = screen.getByText("Hello There!");
    expect(appTitle).toBeDefined();
  });

  it("has a request for your name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    expect(screen.getByText("What's your name?")).toBeDefined();
  });

  it("has an input box for your name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    expect(screen.getByPlaceholderText("name")).toBeDefined();
    // expect(screen.getByLabelText("name-input")).toBeDefined();

  });

  it("allows the user to type their name", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    const inputField = screen.getByPlaceholderText("name");

    fireEvent.change(inputField, {target: {value: 'Test'}})

    const inputtedName = inputField.value
    expect(inputtedName).toBe("Test"); 
  });

  it("has a request for your birthday", () => {
    render(<App />);
    expect(screen.getByText("When's your birthday?")).toBeDefined();
  });

  it("prompts you to input the day", () => {
    render(<App />);
    expect(screen.getByText("Day:")).toBeDefined();
  });

  it("has an input box for the day of your birthday", () => {
    const testComponent = (
      <App />
    );
    render(testComponent);
    expect(screen.getByLabelText("day-input")).toBeDefined();
  });

  it("allows the user to update their birthday day", () => {
    render(<App />);
    const dayInputBox = screen.getByLabelText("day-input");

    fireEvent.change(dayInputBox, {target: {value: '10'}})

    expect(dayInputBox.value).toEqual('10')
  });

  it("prompts the user to input the month", () => {
    render(<App />);
    expect(screen.getByText("Month:")).toBeDefined()
  });

  it("has an input box for the month", () => {
    render(<App />);
    expect(screen.getByLabelText("month-input")).toBeDefined()
  });

  it("allows user to update bday month", () => {
    render(<App />);
    const monthInputField = screen.getByLabelText("month-input")
    
    fireEvent.change(monthInputField, {target: {value: "2020-01"}})

    expect(monthInputField.value).toBe("2020-01")
  });

  it("has a button for user to submit info when completed", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeDefined()
  })
}
)