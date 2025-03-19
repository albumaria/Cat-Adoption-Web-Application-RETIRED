import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import SortButton from "../../components/sort_button/SortButton"
import '@testing-library/jest-dom/vitest';

describe("SortButton", () => {
    it("renders the button with the correct content", () => {
        render(<SortButton content="Sort" onClick={() => {}} width="100px" />);
        expect(screen.getByText("Sort")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        render(<SortButton content="Sort" onClick={handleClick} width="100px" />);
        fireEvent.click(screen.getByText("Sort"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
