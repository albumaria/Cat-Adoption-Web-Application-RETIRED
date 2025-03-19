import { it, expect, describe, vi, beforeEach } from "vitest";
import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react'
import CatList from "../../pages/cat_list/CatList"
import { MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("CatList Component", () => {
    const mockCats = [
        { name: "Whiskers", age: 2 },
        { name: "Mittens", age: 3 },
        { name: "Snowball", age: 1 },
    ];

    let setCatEntitiesMock;
    beforeEach(() => {
        setCatEntitiesMock = vi.fn();
    });

    it("renders correctly", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument();
        expect(screen.getByText("Whiskers")).toBeInTheDocument();
        expect(screen.getByText("Mittens")).toBeInTheDocument();
        expect(screen.getByText("Snowball")).toBeInTheDocument();
    });

    it("navigates to add page when Add button is clicked", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Add"));
        expect(mockNavigate).toHaveBeenCalledWith("/add");
    });

    it("deletes a selected cat", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText("Delete"));
        expect(setCatEntitiesMock).not.toHaveBeenCalled();

        fireEvent.click(screen.getByText("Whiskers")); // Select Whiskers
        fireEvent.click(screen.getByText("Delete"));

        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Mittens", age: 3 },
            { name: "Snowball", age: 1 },
        ]);
    });

    it("sorts cats alphabetically", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Sort ⬆"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Mittens", age: 3 },
            { name: "Snowball", age: 1 },
            { name: "Whiskers", age: 2 },
        ]);

        fireEvent.click(screen.getByText("Sort ⬇"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Whiskers", age: 2 },
            { name: "Snowball", age: 1 },
            { name: "Mittens", age: 3 },
        ]);

        fireEvent.click(screen.getByText("Undo Sort"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Whiskers", age: 2 },
            { name: "Mittens", age: 3 },
            { name: "Snowball", age: 1 },
        ]);
    });

    it("filters cats based on search input", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Show Kittens"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Whiskers", age: 2 },
            { name: "Snowball", age: 1 },
        ]);

        fireEvent.click(screen.getByText("Show Adult Cats"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Mittens", age: 3 },
        ]);

        fireEvent.click(screen.getByText("Show Senior Cats"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([]);

        fireEvent.click(screen.getByText("Show All"));
        expect(setCatEntitiesMock).toHaveBeenCalledWith([
            { name: "Whiskers", age: 2 },
            { name: "Mittens", age: 3 },
            { name: "Snowball", age: 1 },
        ]);

    });

    it("navigates to selected cat's details", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Whiskers"));
        fireEvent.click(screen.getByText("Whiskers"));
        expect(mockNavigate).toHaveBeenCalledWith("/whiskers");
    });

    it("navigates to update page when Update button is clicked", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Whiskers")); // Select Whiskers
        fireEvent.click(screen.getByText("Update"));
        expect(mockNavigate).toHaveBeenCalledWith("/update/whiskers");
    });

    it("changes age group filter", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Show Kittens"));
        expect(setCatEntitiesMock).toHaveBeenCalled();
    });

    const mockCats2 = Array.from({ length: 15 }, (_, i) => ({
        name: `Cat ${i + 1}`,
        age: i % 5 + 1, // Randomize ages between 1-5
    }));

    it("updates current page when clicking next and previous buttons", () => {
        render(
            <MemoryRouter>
                <CatList catEntities={mockCats2} setCatEntities={setCatEntitiesMock} />
            </MemoryRouter>
        );
        expect(screen.getByTestId("current-page")).toHaveTextContent("1");

        const nextButton = screen.getAllByRole("button").find((btn) =>
            btn.classList.contains("left-right-buttons")
        );
        expect(nextButton).toBeTruthy();

        fireEvent.click(nextButton);
        expect(screen.getByTestId("current-page")).toHaveTextContent("2");

        const prevButton = screen.getAllByRole("button").find((btn) =>
            btn.classList.contains("left-right-buttons")
        );

        expect(prevButton).toBeTruthy();
        fireEvent.click(prevButton);
        expect(screen.getByTestId("current-page")).toHaveTextContent("1");
    });

});
