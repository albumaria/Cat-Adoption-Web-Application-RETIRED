import { it, expect, describe, vi } from "vitest";
import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react'
import AddCat from "../../pages/add_cat/AddCat"
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

describe("AddCat", () => {
    it("should display an error message when the name is empty", () => {
        render(
            <BrowserRouter>
                <AddCat addCat={vi.fn()}/>
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Add Cat'));

        expect(screen.getByText("Name must be a string and cannot be empty.")).toBeInTheDocument();
    });

    it("should add a new cat and navigate to /cats", () => {
        const addCat = vi.fn();  // Mock the addCat function

        const mockImageUrl = 'fake-url';
        global.URL.createObjectURL = vi.fn(() => mockImageUrl);

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "M" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "4.5" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "A playful cat" } });
        fireEvent.click(screen.getByText("Select Image"));
        const fileInput = screen.getByTestId("file-input");

        const file = new Blob(['file content'], { type: 'image/jpeg' });
        Object.defineProperty(fileInput, 'files', {
            value: [file],
            writable: false,
        });

        fireEvent.change(fileInput);
        fireEvent.click(screen.getByText('Add Cat'));

        const expectedCat = {
            name: 'Whiskers',
            gender: 'M',
            age: "2",
            weight: "4.5",
            description: 'A playful cat',
            image: mockImageUrl,  // Use the mocked image URL
        };

        expect(addCat).toHaveBeenCalledWith(expectedCat);

        expect(window.location.pathname).toBe('/cats');
    });

    it('should show error for invalid gender', () => {
        const addCat = vi.fn();

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "X" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "4.5" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "A playful cat" } });
        fireEvent.change(screen.getByTestId("file-input"), { target: { files: [new Blob(['file content'], { type: 'image/jpeg' })] } });

        fireEvent.click(screen.getByText("Add Cat"));
        expect(screen.getByText("Gender must be 'F' or 'M'.")).toBeInTheDocument();
    });

    it('should show error for invalid age (non-integer)', () => {
        const addCat = vi.fn();

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "F" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2.1" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "4.5" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "A playful cat" } });
        fireEvent.change(screen.getByTestId("file-input"), { target: { files: [new Blob(['file content'], { type: 'image/jpeg' })] } });

        fireEvent.click(screen.getByText("Add Cat"));
        expect(screen.getByText("Age must be a whole number.")).toBeInTheDocument();
    });

    it('should show error for invalid weight', () => {
        const addCat = vi.fn();

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "F" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "Nup" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "A playful cat" } });
        fireEvent.change(screen.getByTestId("file-input"), { target: { files: [new Blob(['file content'], { type: 'image/jpeg' })] } });

        fireEvent.click(screen.getByText("Add Cat"));
        expect(screen.getByText("Weight must be a number (e.g., 4.5).")).toBeInTheDocument();
    });

    it('should show error for empty description', () => {
        const addCat = vi.fn();

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "F" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "2.4" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "" } });
        fireEvent.change(screen.getByTestId("file-input"), { target: { files: [new Blob(['file content'], { type: 'image/jpeg' })] } });

        fireEvent.click(screen.getByText("Add Cat"));
        expect(screen.getByText("Description cannot be empty.")).toBeInTheDocument();
    });

    it('should show error for missing image', () => {

        const addCat = vi.fn();

        render(
            <BrowserRouter>
                <AddCat addCat={addCat} />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Whiskers" } });
        fireEvent.change(screen.getByPlaceholderText("Gender (F/M)"), { target: { value: "F" } });
        fireEvent.change(screen.getByPlaceholderText("Age"), { target: { value: "2" } });
        fireEvent.change(screen.getByPlaceholderText("Weight"), { target: { value: "2.4" } });
        fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Da" } });

        fireEvent.click(screen.getByText("Add Cat"));
        expect(screen.getByText("You must upload an image.")).toBeInTheDocument();
    });
});