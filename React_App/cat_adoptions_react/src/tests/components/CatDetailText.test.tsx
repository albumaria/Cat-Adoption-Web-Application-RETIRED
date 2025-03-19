import { it, expect, describe, vi } from "vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import CatDetailText from "../../components/cat_detail_text/CatDetailText"
import '@testing-library/jest-dom/vitest';

describe('CatDetailText', () => {
    const mockCat = { name: "Cola", gender:"F", age:13, weight:1.4, description:"Cola is an elderly cat"
        , image: "https://i.imgur.com/mmqATRs.png" };

    it('renders the content that is passed to the CatDetailText', () => {
        render(<CatDetailText cat={mockCat}/>);

        const catName = screen.getByText('Cola');
        expect(catName).toBeInTheDocument();

        const catGender = screen.getByText('Gender: F');
        expect(catGender).toBeInTheDocument();

        const catAge = screen.getByText('Age: 13');
        expect(catAge).toBeInTheDocument();

        const catWeight = screen.getByText('Weight: 1.4');
        expect(catWeight).toBeInTheDocument();

        const catDescription = screen.getByText('Cola is an elderly cat');
        expect(catDescription).toBeInTheDocument();
    });

});