import React, { render } from '@testing-library/react';
import Search from '../components/Search';

describe("Search", () => {
    it("renders search components correctly", () => {
        const { asFragment } = render(<Search />);
        expect(asFragment()).toMatchSnapshot();
    });
});
