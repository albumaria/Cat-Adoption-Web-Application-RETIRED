import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import InputField from "../../components/input_field/InputField"
import '@testing-library/jest-dom/vitest';

describe('InputField', () => {
    it('renders the input field with the correct placeholder', () => {
        render(<InputField placeHolder="Search..." value="" onChange={vi.fn()} />);

        const inputField = screen.getByPlaceholderText('Search...');
        expect(inputField).toBeInTheDocument();
    });


    it('displays the current value in the input field', () => {
        render(<InputField placeHolder="Search..." value="Test" onChange={vi.fn()} />);

        const inputField = screen.getByDisplayValue('Test');
        expect(inputField).toBeInTheDocument();
    });
});