import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

test('Should render Dropdown options when clicked, should unmount Dropdown options when clicked again', () => {

    const dropDownTitle = 'Browse'
    const dropDownOptions = [
        {
            name:'option01',
            to:'/option01'
        },
        {
            name: 'option02',
            to:'/option02'
        }
    ]

    render(
        <BrowserRouter>
            <Dropdown options={dropDownOptions} menuTitle={dropDownTitle}/>
        </BrowserRouter>
    )

    const dropDown = screen.getByRole('button');
    expect(dropDown).toHaveTextContent('Browse');
    expect(screen.queryByText('option01')).not.toBeInTheDocument();
    expect(screen.queryByText('option02')).not.toBeInTheDocument();
    fireEvent.click(dropDown);
    expect(screen.getByText('option01')).toBeInTheDocument();
    expect(screen.getByText('option01')).toHaveAttribute('href', '/option01')
    expect(screen.getByText('option02')).toBeInTheDocument();
    expect(screen.getByText('option02')).toHaveAttribute('href', '/option02')
    fireEvent.click(dropDown);
    expect(screen.queryByText('option01')).not.toBeInTheDocument();
    expect(screen.queryByText('option02')).not.toBeInTheDocument();
}) 