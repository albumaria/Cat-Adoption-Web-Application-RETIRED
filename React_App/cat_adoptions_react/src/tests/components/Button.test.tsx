import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Button from "../../components/button/Button"
import '@testing-library/jest-dom/vitest';

describe('Button', () => {
   it('renders the content that is passed to the button', () => {
      const mockOnClick = vi.fn();
      render(<Button content="test" onClick={mockOnClick}/>);

      const buttonText = screen.getByText('test');

      expect(buttonText).toBeInTheDocument();
   });

   it('performs the function that is passed to it', () => {
      const mockOnClick = vi.fn();
      render(<Button content="test" onClick={mockOnClick}/>);

      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(mockOnClick).toHaveBeenCalled();
   });
});