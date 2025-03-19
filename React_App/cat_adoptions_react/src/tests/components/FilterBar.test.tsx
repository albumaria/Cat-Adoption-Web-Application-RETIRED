import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import FilterBar from "../../components/filter_bar/FilterBar"
import '@testing-library/jest-dom/vitest';

describe('FilterBar', () => {
    it('renders an input field', () => {
        render(<FilterBar onSearch={vi.fn()} />);

        // Check if input field is rendered
        const inputField = screen.getByPlaceholderText('Search...');
        expect(inputField).toBeInTheDocument();
    });

    it('calls onSearch with the correct value when typing', () => {
        const mockOnSearch = vi.fn();

        render(<FilterBar onSearch={mockOnSearch} />);

        const inputField = screen.getByPlaceholderText('Search...');

        fireEvent.change(inputField, { target: { value: 'Whiskers' } });

        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('Whiskers');
    });

    it('updates the input field value when typing', () => {
        render(<FilterBar onSearch={vi.fn()} />);
        const inputField = screen.getByPlaceholderText('Search...');
        fireEvent.change(inputField, { target: { value: 'Fluffy' } });

        expect(inputField).toHaveValue('Fluffy');
    });
});