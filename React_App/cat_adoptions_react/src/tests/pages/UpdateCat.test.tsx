import { it, expect, describe, vi, beforeEach } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import UpdateCat from "../../pages/update_cat/UpdateCat"
import '@testing-library/jest-dom/vitest';

// Create mock functions outside the mock
const mockNavigate = vi.fn();
// Create a variable to hold the current catName
let mockCatName = 'whiskers';

// Mock the hooks to use our variables
vi.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
    useParams: () => ({ catName: mockCatName })
}));

// Mock components
vi.mock('../../components/rectangle/Rectangle', () => ({
    default: ({ children }) => <div data-testid="rectangle">{children}</div>
}));

vi.mock('../../components/input_field/InputField', () => ({
    default: ({ placeHolder, value, onChange }) => (
        <input
            data-testid={`input-${placeHolder}`}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
        />
    )
}));

vi.mock('../../components/button/Button', () => ({
    default: ({ content, onClick }) => (
        <button data-testid={`button-${content}`} onClick={onClick}>
            {content}
        </button>
    )
}));

vi.mock('../../components/input_file_button/InputFileButton', () => ({
    default: ({ onFileSelect }) => (
        <button
            data-testid="input-file-button"
            onClick={() => onFileSelect('cat-image.jpg')}
        >
            Upload Image
        </button>
    )
}));

vi.mock('../../components/upper_border/UpperBorderCenteredText', () => ({
    default: ({ content }) => <div data-testid="upper-border">{content}</div>
}));

describe('UpdateCat Component', () => {
    const mockCatEntities = [
        {
            name: 'Whiskers',
            gender: 'F',
            age: '3',
            weight: '4.5',
            description: 'Playful cat',
            image: 'whiskers.jpg'
        },
        {
            name: 'Felix',
            gender: 'M',
            age: '5',
            weight: '5.2',
            description: 'Lazy cat',
            image: 'felix.jpg'
        }
    ];

    const mockSetCatEntities = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        // Reset the catName to default for each test
        mockCatName = 'whiskers';
    });

    it('renders with initial cat data', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        expect(screen.getByTestId('upper-border')).toHaveTextContent('Update Cat Info!');
        expect(screen.getByTestId('input-Name')).toHaveValue('Whiskers');
        expect(screen.getByTestId('input-Gender (F/M)')).toHaveValue('F');
        expect(screen.getByTestId('input-Age')).toHaveValue('3');
        expect(screen.getByTestId('input-Weight')).toHaveValue('4.5');
        expect(screen.getByTestId('input-Description')).toHaveValue('Playful cat');
    });

    it('updates form fields when values change', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Name'), { target: { value: 'Mittens' } });
        fireEvent.change(screen.getByTestId('input-Gender (F/M)'), { target: { value: 'M' } });
        fireEvent.change(screen.getByTestId('input-Age'), { target: { value: '4' } });
        fireEvent.change(screen.getByTestId('input-Weight'), { target: { value: '5.0' } });
        fireEvent.change(screen.getByTestId('input-Description'), { target: { value: 'Sweet cat' } });
        expect(screen.getByTestId('input-Name')).toHaveValue('Mittens');
        expect(screen.getByTestId('input-Gender (F/M)')).toHaveValue('M');
        expect(screen.getByTestId('input-Age')).toHaveValue('4');
        expect(screen.getByTestId('input-Weight')).toHaveValue('5.0');
        expect(screen.getByTestId('input-Description')).toHaveValue('Sweet cat');
    });

    it('sets image when file is selected', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.click(screen.getByTestId('input-file-button'));
        // Update button should be enabled with all fields filled
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        // Since all fields are valid, it should update the cat and navigate
        expect(mockSetCatEntities).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/cats');
    });

    it('shows error for empty name', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Name'), { target: { value: '' } });
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        expect(screen.getByText('Name must be a string and cannot be empty.')).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('shows error for invalid gender', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Gender (F/M)'), { target: { value: 'X' } });
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        expect(screen.getByText("Gender must be 'F' or 'M'.")).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
    });

    it('shows error for invalid age', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Age'), { target: { value: 'abc' } });
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        expect(screen.getByText('Age must be a whole number.')).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
    });

    it('shows error for invalid weight', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Weight'), { target: { value: 'heavy' } });
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        expect(screen.getByText('Weight must be a number (e.g., 4.5).')).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
    });

    it('shows error for empty description', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);
        fireEvent.change(screen.getByTestId('input-Description'), { target: { value: '' } });
        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);
        expect(screen.getByText('Description cannot be empty.')).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
    });

    it('shows error if image is not selected', () => {
        // First clear the existing image
        const catEntitiesWithNoImage = [
            { ...mockCatEntities[0], image: '' },
            mockCatEntities[1]
        ];

        render(<UpdateCat catEntities={catEntitiesWithNoImage} setCatEntities={mockSetCatEntities} />);

        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);

        expect(screen.getByText('You must upload an image.')).toBeInTheDocument();
        expect(mockSetCatEntities).not.toHaveBeenCalled();
    });

    it('successfully updates cat and navigates when all inputs are valid', () => {
        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);

        fireEvent.change(screen.getByTestId('input-Name'), { target: { value: 'Mittens' } });
        fireEvent.change(screen.getByTestId('input-Gender (F/M)'), { target: { value: 'M' } });
        fireEvent.change(screen.getByTestId('input-Age'), { target: { value: '4' } });
        fireEvent.change(screen.getByTestId('input-Weight'), { target: { value: '5.0' } });
        fireEvent.change(screen.getByTestId('input-Description'), { target: { value: 'Sweet cat' } });
        fireEvent.click(screen.getByTestId('input-file-button')); // Sets image to 'cat-image.jpg'

        const updateButton = screen.getByTestId('button-Update Cat');
        fireEvent.click(updateButton);

        expect(mockSetCatEntities).toHaveBeenCalledWith([
            {
                name: 'Mittens',
                gender: 'M',
                age: '4',
                weight: '5.0',
                description: 'Sweet cat',
                image: 'cat-image.jpg'
            },
            mockCatEntities[1]
        ]);
        expect(mockNavigate).toHaveBeenCalledWith('/cats');
    });

    it('handles case where cat is not found', () => {
        // Change the catName to a non-existent one
        mockCatName = 'nonexistent';

        render(<UpdateCat catEntities={mockCatEntities} setCatEntities={mockSetCatEntities} />);

        // Should render with empty fields
        expect(screen.getByTestId('input-Name')).toHaveValue('');
        expect(screen.getByTestId('input-Gender (F/M)')).toHaveValue('');
        expect(screen.getByTestId('input-Age')).toHaveValue('');
        expect(screen.getByTestId('input-Weight')).toHaveValue('');
        expect(screen.getByTestId('input-Description')).toHaveValue('');
    });
});