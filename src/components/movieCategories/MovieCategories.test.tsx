import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCategories from "./MovieCategories";

describe("MovieCategories", () : void => {
    it("renders on the page", (): void => {
       render(<MovieCategories selectedCategory="all" search="" />);

       expect(screen.getByText("Movies")).toBeInTheDocument();
    });

    it("renders all movies by default", (): void => {
        render(<MovieCategories selectedCategory="all" search="" />);

        expect(screen.getByAltText(/eternals's poster/i)).toBeInTheDocument();
        expect(screen.getByAltText("GUARDIANS OF THE GALAXY's poster")).toBeInTheDocument();
        expect(screen.getByAltText("AVENGERS: ENDGAME's poster")).toBeInTheDocument();
        expect(screen.getByAltText("IRON MAN's poster")).toBeInTheDocument();
    });
})