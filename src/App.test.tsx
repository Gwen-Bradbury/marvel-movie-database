import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', (): void => {
  it("renders", (): void => {
    render(<App />);
    expect(screen.getByText("Marvel")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
  })
});
