
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import ButtonComponent from '../../components/ButtonComponent';


afterEach(() => {
    cleanup();
})

describe("Button Component", () => {
    const setToggle = jest.fn();
    render(<ButtonComponent name='Click Me!' />);
    const button = screen.getByTestId("button");

    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

    // Test 2 
    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!");
    })
})