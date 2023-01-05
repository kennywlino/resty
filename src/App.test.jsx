import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './App';

const server = setupServer(
    rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({
        results: [
            { name: "ditto" },
        ],
    }));
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App integration', () => {
    test('render data in the output area', async () => {
        render(<App/>);

        const input = screen.getByTestId('url-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(input, {target: {value: '/testGet'}});
        fireEvent.click(submitButton);

        const results = await screen.findByTestId('results');
        console.log(results);
        expect(results).toHaveTextContent('ditto');
    })
});