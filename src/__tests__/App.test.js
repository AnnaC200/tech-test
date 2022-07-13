import React, { render } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
    it("renders app components correctly", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});
