import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import CatContainer from "../../components/cat_container/CatContainer"
import '@testing-library/jest-dom/vitest';

describe('CatContainer', () => {
    const mockCatList = [
        { name: 'Whiskers', image: 'https://example.com/whiskers.jpg' },
        { name: 'Fluffy', image: 'https://example.com/fluffy.jpg' },
    ];

    const mockOnCatSelect = vi.fn();

    it('renders the cat cards correctly', () => {
        render(
            <CatContainer
                catList={mockCatList}
                startIndex={0}
                selectedCat={mockCatList[0]}
                onCatSelect={mockOnCatSelect}
            />
        );
        expect(screen.getByText('Whiskers')).toBeInTheDocument();
        expect(screen.getByText('Fluffy')).toBeInTheDocument();
    });

    it('calls onCatSelect when a cat card is clicked', () => {
        render(
            <CatContainer
                catList={mockCatList}
                startIndex={0}
                selectedCat={mockCatList[0]}
                onCatSelect={mockOnCatSelect}
            />
        );

        const whiskersCard = screen.getByText('Whiskers');
        fireEvent.click(whiskersCard);

        expect(mockOnCatSelect).toHaveBeenCalledTimes(1);
        expect(mockOnCatSelect).toHaveBeenCalledWith(mockCatList[0]);
    });

    it('renders placeholder if there are fewer than 10 cats', () => {
        render(
            <CatContainer
                catList={mockCatList}
                startIndex={0}
                selectedCat={null}
                onCatSelect={mockOnCatSelect}
            />
        );

        const cats = screen.getAllByRole('img');
        expect(cats.length).toBe(2);

        const placeholders = screen.getAllByTestId('cat-placeholder');
        expect(placeholders.length).toBe(8);
    });

    it('marks the selected cat as selected', () => {
        render(
            <CatContainer
                catList={mockCatList}
                startIndex={0}
                selectedCat={mockCatList[0]}
                onCatSelect={mockOnCatSelect}
            />
        );

        // eslint-disable-next-line testing-library/no-node-access
        const selectedCatCard = screen.getByText('Whiskers').parentElement;
        expect(selectedCatCard).toHaveClass('selected');
    });

    it('does not mark non-selected cats as selected', () => {
        render(
            <CatContainer
                catList={mockCatList}
                startIndex={0}
                selectedCat={null}
                onCatSelect={mockOnCatSelect}
            />
        );

        // eslint-disable-next-line testing-library/no-node-access
        const whiskersCard = screen.getByText('Whiskers').parentElement;
        // eslint-disable-next-line testing-library/no-node-access
        const fluffyCard = screen.getByText('Fluffy').parentElement;
        expect(whiskersCard).not.toHaveClass('selected');
        expect(fluffyCard).not.toHaveClass('selected');
    });
});