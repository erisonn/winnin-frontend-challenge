import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { AiOutlineFire } from 'react-icons/ai'
import Nav from "../Nav/Nav";
import { BrowserRouter } from "react-router-dom";

test('Should have received links as href attribute, and received titles as names', () => {
    
    const navItem = [{
        'name': 'test', 
        'icon': <AiOutlineFire title='nav-icon'/>, 
        'to': `/test`
        }]

    render(
        <BrowserRouter>
            <Nav links={navItem}/>
        </BrowserRouter>
    )

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveAttribute('href', '/test');
    expect(screen.getByTitle('nav-icon')).toBeInTheDocument();
})