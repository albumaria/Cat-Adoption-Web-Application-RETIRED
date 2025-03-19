import { it, expect, describe } from "vitest";
import React from 'react';
import {render, screen } from '@testing-library/react'
import CatDetail from "../../pages/cat_details/CatDetails"
import { Routes, Route, MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

const mockCats = [
    {
        name: "Whiskers",
        gender: "Male",
        age: "2 years",
        weight: "4kg",
        description: "A playful little cat.",
        image: "whiskers.jpg"
    },
    {
        name: "Mittens",
        gender: "Female",
        age: "3 years",
        weight: "5kg",
        description: "Loves to sleep all day.",
        image: "mittens.jpg"
    }
];

describe("CatDetail Component", () => {
    it("renders cat details correctly when a matching cat is found", () => {
        render(
            <MemoryRouter initialEntries={["/cat/Whiskers"]}>
                <Routes>
                    <Route path="/cat/:catName" element={<CatDetail catEntities={mockCats} />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Whiskers")).toBeInTheDocument();
        expect(screen.getByText("Gender: Male")).toBeInTheDocument();
        expect(screen.getByText("Age: 2 years")).toBeInTheDocument();
        expect(screen.getByText("Weight: 4kg")).toBeInTheDocument();
        expect(screen.getByText("A playful little cat.")).toBeInTheDocument();
    });

    it("shows 'Cat not found' when no matching cat is found", () => {
        render(
            <MemoryRouter initialEntries={["/cat/Unknown"]}>
                <Routes>
                    <Route path="/cat/:catName" element={<CatDetail catEntities={mockCats} />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Cat not found.")).toBeInTheDocument();
    });

});
