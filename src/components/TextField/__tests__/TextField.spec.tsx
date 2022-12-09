import React from 'react';
import { configure, fireEvent, render } from '@testing-library/react';

import TextField, { COMPONENT_ID } from '../TextField';

configure({
  testIdAttribute: 'value',
});

describe('TextField', () => {
  const onClick = jest.fn();
  test('should render Textfield', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextField placeholder="search by username" onChange={onClick} value="textfield" />,
    );
    expect(getByTestId(COMPONENT_ID));
    fireEvent.change(getByPlaceholderText('search by username'), {
      target: { value: 'new value' },
    });
  });
});
