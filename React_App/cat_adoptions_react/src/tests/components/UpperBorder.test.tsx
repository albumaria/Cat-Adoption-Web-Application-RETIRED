import { it, expect, describe } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react'
import UpperBorder from "../../components/upper_border/UpperBorder"
import UpperBorderCenteredText from "../../components/upper_border/UpperBorderCenteredText"
import '@testing-library/jest-dom/vitest';

describe('UpperBorders', () => {
    it("renders the UpperBorder with given content", () => {
        render(<UpperBorder content="Test Content"/>);

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders the UpperBorderCenteredText with given content", () => {
        render(<UpperBorderCenteredText content="Test Content"/>);

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});