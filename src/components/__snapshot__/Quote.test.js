import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Quote from '../Quote';

describe('Quote', () => {
  it('renders the loading state initially', () => {
    render(<Quote />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });
  it('renders the error message when there is an error fetching the quote', async () => {
    jest.spyOn(window, 'fetch').mockRejectedValueOnce(new Error('API Error'));
    render(<Quote />);
    await waitFor(() => {
      const errorElement = screen.getByText(/error fetching the quote/i);
      expect(errorElement).toBeInTheDocument();
    });
  });
  it('renders the quote correctly', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve([
        {
          quote: 'This is a test quote',
          author: 'Test Author',
        },
      ]),
    };
    jest.spyOn(window, 'fetch').mockResolvedValueOnce(mockResponse);
    render(<Quote />);
    await waitFor(() => {
      const quoteElement = screen.getByText(/this is a test quote/i);
      const authorElement = screen.getByText(/test author/i);
      expect(quoteElement).toBeInTheDocument();
      expect(authorElement).toBeInTheDocument();
    });
  });
});
