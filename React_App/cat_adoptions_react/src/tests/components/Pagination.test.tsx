import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from "../../components/pagination/Pagination"
import '@testing-library/jest-dom/vitest';

describe('Pagination Component', () => {
    const onPageChangeMock = vi.fn();

    it('does not render pagination if totalPages is 1 or less', () => {
        const { container } = render(<Pagination currentPage={1} totalPages={1} onPageChange={onPageChangeMock} />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toBeNull();
    });

    it('renders current page number', () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChangeMock} />);
        expect(screen.getByText('3')).toBeInTheDocument(); // Page number should be displayed
    });

    it('renders previous and next buttons correctly', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChangeMock} />);
        expect(screen.getAllByRole('button').length).toBe(3); // Previous, current, and next page buttons
    });

    it('previous button does not appear on first page', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChangeMock} />);
        expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    });

    it('next button does not appear on last page', () => {
        render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChangeMock} />);
        expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
    });

    it('calls onPageChange when previous button is clicked', () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChangeMock} />);
        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]); // Click previous button
        expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });

    it('calls onPageChange when next button is clicked', () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChangeMock} />);
        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[2]); // Click next button
        expect(onPageChangeMock).toHaveBeenCalledWith(4);
    });
});