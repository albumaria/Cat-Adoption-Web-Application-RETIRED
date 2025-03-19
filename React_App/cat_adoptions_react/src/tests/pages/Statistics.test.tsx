import { it, expect, describe } from "vitest";
import React from 'react';
import {render, screen } from '@testing-library/react'
import Statistics from "../../pages/statistics/Statistics";
import '@testing-library/jest-dom/vitest';

describe('Statistics Component', () => {
    // Updated cats data for better testing
    const mockCatEntities = [
        { name: "Whiskers", age: 1 },  // 1 Kitten
        { name: "Mittens", age: 4 },   // Adult
        { name: "Snowball", age: 12 }, // Senior
        { name: "Fluffy", age: 13 },   // Senior
        { name: "Shadow", age: 10 },   // Adult
        { name: "Leo", age: 11 },      // Senior
        { name: "Misty", age: 15 },    // Senior
    ];

    it('renders the title correctly', () => {
        render(<Statistics catEntities={mockCatEntities} />);

        expect(screen.getByText("Cat Age Statistics")).toBeInTheDocument();
    });

    it('calculates and displays the correct number of Kittens, Adults, and Seniors', () => {
        render(<Statistics catEntities={mockCatEntities} />);

        // eslint-disable-next-line testing-library/no-node-access
        const kittensCategory = screen.getByText("Kittens").closest(".statistics-box");
        // eslint-disable-next-line testing-library/no-node-access
        const kittensCount = kittensCategory.querySelector(".statistics-number");
        expect(kittensCount).toHaveTextContent("1");

        // eslint-disable-next-line testing-library/no-node-access
        const adultsCategory = screen.getByText("Adults").closest(".statistics-box");
        // eslint-disable-next-line testing-library/no-node-access
        const adultsCount = adultsCategory.querySelector(".statistics-number");
        expect(adultsCount).toHaveTextContent("2");

        // eslint-disable-next-line testing-library/no-node-access
        const seniorsCategory = screen.getByText("Seniors").closest(".statistics-box");
        // eslint-disable-next-line testing-library/no-node-access
        const seniorsCount = seniorsCategory.querySelector(".statistics-number");
        expect(seniorsCount).toHaveTextContent("4");
    });

    it('calculates the correct height of the bars based on the category count', () => {
        render(<Statistics catEntities={mockCatEntities} />);

        // eslint-disable-next-line testing-library/no-node-access
        const kittensBar = screen.getByText("Kittens").closest(".statistics-bar");
        // eslint-disable-next-line testing-library/no-node-access
        const adultsBar = screen.getByText("Adults").closest(".statistics-bar");
        // eslint-disable-next-line testing-library/no-node-access
        const seniorsBar = screen.getByText("Seniors").closest(".statistics-bar");

        const kittensHeight = (1 / 7) * 100; // 1 kitten out of 7 cats
        const adultsHeight = (2 / 7) * 100; // 2 adults out of 7 cats
        const seniorsHeight = (4 / 7) * 100; // 4 seniors out of 7 cats

        expect(kittensBar).toHaveStyle(`--size: ${kittensHeight}%`);
        expect(adultsBar).toHaveStyle(`--size: ${adultsHeight}%`);
        expect(seniorsBar).toHaveStyle(`--size: ${seniorsHeight}%`);
    });

});
