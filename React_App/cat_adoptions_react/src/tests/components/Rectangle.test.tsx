import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Rectangle from "../../components/rectangle/Rectangle"
import '@testing-library/jest-dom/vitest';

describe("Rectangle Component", () => {
    it("renders the Rectangle component with default props", () => {
        render(<Rectangle>Test Content</Rectangle>);
        const rectangle = screen.getByText("Test Content");
        expect(rectangle).toBeInTheDocument();
        expect(rectangle).toHaveClass("rectangle");
    });

    it("applies custom width and height", () => {
        render(<Rectangle width="300px" height="150px">Custom Size</Rectangle>);
        const rectangle = screen.getByText("Custom Size");
        expect(rectangle).toHaveStyle({width: "300px", height: "150px"});
    });

    it("renders an image when imageSrc is provided and type is 'right'", () => {
        render(<Rectangle type="right" imageSrc="test-image.jpg"/>);
        const image = screen.getByRole("img", {name: "Rectangle"});
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "test-image.jpg");
    });

    it("does not render an image if type is not 'right'", () => {
        render(<Rectangle type="default" imageSrc="test-image.jpg">No Image</Rectangle>);
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("renders children when no image is provided", () => {
        render(<Rectangle>Content Inside</Rectangle>);
        expect(screen.getByText("Content Inside")).toBeInTheDocument();
    });

});