import { it, expect, describe } from "vitest";
import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react'
import Home from "../../pages/home/Home"
import { Routes, Route, MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

describe('Home Component', () => {

    it('renders the header correctly', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("Adopt a Cat! - Home")).toBeInTheDocument();
    });

    it('renders the "Show Cat List" button', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("Show Cat List")).toBeInTheDocument();
    });

    it('renders the "Show Cat Statistics" button', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("Show Cat Statistics")).toBeInTheDocument();
    });

    it('navigates to "/cats" when "Show Cat List" button is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cats" element={<div>Cat List</div>} />
                </Routes>
            </MemoryRouter>
        );

        // Simulate click on the "Show Cat List" button
        fireEvent.click(screen.getByText("Show Cat List"));

        // Check if the navigation happened
        expect(screen.getByText("Cat List")).toBeInTheDocument();
    });

    it('navigates to "/statistics" when "Show Cat Statistics" button is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/statistics" element={<div>Cat Statistics</div>} />
                </Routes>
            </MemoryRouter>
        );

        // Simulate click on the "Show Cat Statistics" button
        fireEvent.click(screen.getByText("Show Cat Statistics"));

        // Check if the navigation happened
        expect(screen.getByText("Cat Statistics")).toBeInTheDocument();
    });


});