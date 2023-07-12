import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

describe('Calculator', () => {
  it('renders the calculator component', () => {
    const { getByText } = render(<Calculator />);
    const headingElement = getByText('Lets do some math!');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the clicked button value on the calculator display', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const buttonElement = getByText('7');
    fireEvent.click(buttonElement);
    const displayElement = getByDisplayValue('7');
    expect(displayElement).toBeInTheDocument();
  });

  it('performs calculations correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button7 = getByText('7');
    const buttonPlus = getByText('+');
    const button5 = getByText('5');
    const buttonEqual = getByText('=');

    fireEvent.click(button7);
    fireEvent.click(buttonPlus);
    fireEvent.click(button5);
    fireEvent.click(buttonEqual);

    const displayElement = getByDisplayValue('12');
    expect(displayElement).toBeInTheDocument();
  });
});
