import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigate';

describe('Navigation', () => {
  it('renders the navigation component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const headingElement = getByText('Math Magicians');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the correct navigation links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    const homeLink = getByText('Home');
    const calculatorLink = getByText('Calculator');
    const quoteLink = getByText('Quote');

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });
});
