import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import CatCard from "../../components/cat_card/CatCard"
import '@testing-library/jest-dom/vitest';

describe('CatCard', () => {
    const mockOnSelect = vi.fn();
    const mockCat = {name: "bolec", image: "https://example.com/bolec.jpg"}

    it('should render the cat card with name and image', () => {
        render(<CatCard cat={mockCat} onSelect={mockOnSelect} isSelected={false}/>);

        const nameElement = screen.getByText('bolec');
        const imageElement = screen.getByAltText('bolec');

        expect(nameElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', mockCat.image);
    });

    it('should call onSelect when clicked', () => {
        render(<CatCard cat={mockCat} isSelected={false} onSelect={mockOnSelect} />);

        const catCard = screen.getByText('bolec').parentElement;

        fireEvent.click(catCard);

        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });

    it('applies "selected" class when isSelected is true', () => {
        render(<CatCard cat={mockCat} isSelected={true} onSelect={mockOnSelect} />);

        const catCard = screen.getByText('bolec').parentElement;

        expect(catCard).toHaveClass('selected');
    });

    it('does not apply "selected" class when isSelected is false', () => {
        render(<CatCard cat={mockCat} isSelected={false} onSelect={mockOnSelect} />);

        const catCard = screen.getByText('bolec').parentElement;

        expect(catCard).not.toHaveClass('selected');
    });
});