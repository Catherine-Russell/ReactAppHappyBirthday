import App from '../App.jsx'
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { render, fireEvent, screen } from "@testing-library/react";
// Extra tests:
// bday must be valid date - day can't be above 31/30/29 depending on month


describe("App component", () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers()
        const todayDate = new Date('2024-01-01')
        vi.setSystemTime(todayDate)
      })
    
    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers()
      })
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

  it("has a request for your birthday", () => {
    render(<App />);
    expect(screen.getByText("When's your next birthday?")).toBeDefined();

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

  it("doesn't allow the user to input day less than 1", () => {
    render(<App />);
    const dayInputBox = screen.getByLabelText("day-input");

    fireEvent.change(dayInputBox, {target: {value: '0'}})

    expect(dayInputBox.value).toEqual('1')
  });

  it("doesn't allow the user to input day greater than 31", () => {
    render(<App />);
    const dayInputBox = screen.getByLabelText("day-input");

    fireEvent.change(dayInputBox, {target: {value: '40'}})

    expect(dayInputBox.value).toEqual('31')
  });


  it("has a button for user to submit info when completed", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeDefined()
  });

  it("tells the user happy birthday if today is their birthday", () => {
    const todayDate = new Date('2024-12-31')
    vi.setSystemTime(todayDate)
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("name"), {target: {value: 'Test Name'}})
    fireEvent.change(screen.getByLabelText("month-input"), {target: {value: '2024-12'}})
    fireEvent.change(screen.getByLabelText("day-input"), {target: {value: '31'}})
    fireEvent.click(screen.getByRole("button"))

    expect(screen.getByText("Happy Birthday Test Name!")).toBeDefined();

  });

  it("doesn't have a happy birthday message before submission", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("name"), {target: {value: 'Test Name'}})
    fireEvent.change(screen.getByLabelText("month-input"), {target: {value: '2024-01'}})
    fireEvent.change(screen.getByLabelText("day-input"), {target: {value: '01'}})
    
    expect(screen.queryByText("Happy Birthday Test Name!")).toBeNull();

  });

  it("tells the user how many days until next birthday", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("name"), {target: {value: 'Test Name'}})
    fireEvent.change(screen.getByLabelText("month-input"), {target: {value: '2024-01'}})
    fireEvent.change(screen.getByLabelText("day-input"), {target: {value: '07'}})
    fireEvent.click(screen.getByRole("button"))

    expect(screen.getByText("Your birthday will be in 6 days, Test Name.")).toBeDefined();

  });

  it("tells the user how many days until next birthday even if they input last bday date", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("name"), {target: {value: 'Test Name'}})
    fireEvent.change(screen.getByLabelText("month-input"), {target: {value: '2023-12'}})
    fireEvent.change(screen.getByLabelText("day-input"), {target: {value: '01'}})
    fireEvent.click(screen.getByRole("button"))

    expect(screen.getByText("Your birthday will be in 334 days, Test Name.")).toBeDefined();

  });

  it("tells the user how many days until next birthday even if they input many years ago bday date", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("name"), {target: {value: 'Test Name'}})
    fireEvent.change(screen.getByLabelText("month-input"), {target: {value: '2021-12'}})
    fireEvent.change(screen.getByLabelText("day-input"), {target: {value: '01'}})
    fireEvent.click(screen.getByRole("button"))

    expect(screen.getByText("Your birthday will be in 334 days, Test Name.")).toBeDefined();

  });

}
)

// Tests still to write:
// if they put their bday back enough years that leap years impact it
// Make it that they can't put the wrong date for a month ie maxday changes depending on the month they input