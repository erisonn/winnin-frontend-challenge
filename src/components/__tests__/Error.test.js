import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Error from '../Error/Error'

test('Should display received error message, should run received function when button is clicked', () => {

    const errorMessage = 'Error!'
    const buttonText = 'Try again'
    const mockErrorFunction = jest.fn;

    const handleError = jest.fn(() => {
        mockErrorFunction();
    });

    render(<Error errorMessage={errorMessage} buttonText={buttonText} handleError={handleError}/>)

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    fireEvent.click(screen.getByText(buttonText));
    expect(handleError).toBeCalled();
})