import React from 'react';
import { configure, render } from '@testing-library/react';

import Button, { COMPONENT_ID } from '../Button';

configure({
  testIdAttribute: 'id',
});

describe('Button', () => {
  const onClick = jest.fn();
  test('should render Button', () => {
    const { asFragment, getByText, getByTestId } = render(<Button name="search" onClick={onClick} />);

    expect(getByText('search'));
    expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
