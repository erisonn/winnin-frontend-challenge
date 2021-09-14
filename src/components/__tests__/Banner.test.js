import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import mockIMG from './mock.png'
import Banner from "../Banner/Banner";

test('Should render placeholder icon when image is not available', () => {
    const data = {
        img: null,
        title: 'Test',
        subtitle: 'React Testing',
        description: 'React Testing Library is a very light-weight solution for testing React components.'
    }

    render(<Banner data={data}/>)

    const placeholderSvg = screen.getByTestId('placeholder-icon')
    const providedImage = screen.queryByRole('img')
    expect(placeholderSvg).toBeInTheDocument();
    expect(providedImage).not.toBeInTheDocument();
})

test('Should render provided image when available', () => {
    const data = {
        img: mockIMG,
        title: 'Test',
        subtitle: 'React Testing',
        description: 'React Testing Library is a very light-weight solution for testing React components.'
    }

    render(<Banner data={data}/>)

    const providedImage = screen.getByRole('img')
    const placeholderSvg = screen.queryByTestId('placeholder-icon')
    expect(providedImage).toBeInTheDocument();
    expect(providedImage).toHaveAttribute('src', mockIMG)
    expect(placeholderSvg).not.toBeInTheDocument();
})