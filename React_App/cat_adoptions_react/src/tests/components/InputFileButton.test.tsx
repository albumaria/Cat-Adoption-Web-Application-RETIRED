import { it, expect, vi, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import InputFileButton from "../../components/input_file_button/InputFileButton";
import '@testing-library/jest-dom/vitest';
import React from "react";

describe('InputFileButton', () => {
    global.URL.createObjectURL = vi.fn(() => 'fake-url');

    it('renders the select image button', () => {
        render(<InputFileButton onFileSelect={vi.fn()} />);

        const button = screen.getByText('Select Image');
        expect(button).toBeInTheDocument();
    });

    it('performs the function that is passed to it', () => {
        const mockOnClick = vi.fn();
        render(<InputFileButton onFileSelect={mockOnClick} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        // eslint-disable-next-line testing-library/no-node-access
        const fileInput = screen.getByRole('button').nextSibling;
        const file = new Blob(['file content'], { type: 'image/jpeg' });
        Object.defineProperty(fileInput, 'files', {
            value: [file],
        });

        fireEvent.change(fileInput);

        expect(mockOnClick).toHaveBeenCalled();
        expect(mockOnClick).toHaveBeenCalledWith('fake-url');
    });

    it('displays the file name after selecting a file', () => {
        render(<InputFileButton onFileSelect={vi.fn()} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        // eslint-disable-next-line testing-library/no-node-access
        const fileInput = screen.getByRole('button').nextSibling as HTMLInputElement;
        const file = new File(['file content'], 'example.jpg', { type: 'image/jpeg' });

        Object.defineProperty(fileInput, 'files', {
            value: [file],
            writable: false,
        });

        fireEvent.change(fileInput);

        const fileNameText = screen.getByText('example.jpg');
        expect(fileNameText).toBeInTheDocument();
    });
});
