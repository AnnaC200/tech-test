import React, { render } from '@testing-library/react';
import SearchResults from "../components/SearchResults";

describe("Search", () => {
    it("renders search result components correctly", () => {
        const { asFragment } = render(<SearchResults />);
        expect(asFragment()).toMatchSnapshot();
    });
});