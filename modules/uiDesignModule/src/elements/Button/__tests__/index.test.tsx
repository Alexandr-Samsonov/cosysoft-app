import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '..';

describe('Button', () => {
  test('checking children', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test');
  });
});
