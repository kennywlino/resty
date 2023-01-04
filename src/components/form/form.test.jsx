import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../../App';
// import Form from './index';

describe('Form', () => {
    test('triggers data render on submit', () => {
        render(<App />);

        // getting elements from Form  
        const submitButton = screen.getByTestId('submit-button');
        fireEvent.click(submitButton);
        
        const resultsComponent = screen.getByTestId('results');
        expect(resultsComponent).toBeInTheDocument();
    });
});