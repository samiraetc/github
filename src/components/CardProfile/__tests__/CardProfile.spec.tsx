import React from 'react';
import { configure, fireEvent, render } from '@testing-library/react';

import CardProfile, { COMPONENT_ID } from '../CardProfile';

configure({
  testIdAttribute: 'id',
});

describe('CardProfile', () => {
  test('should render Button with button', () => {
    const { asFragment, getByText, getByTestId } = render(
      <CardProfile name="Matt Biitencourt" biography="Hello, this is my Github profile" hasButton />,
    );

    expect(getByText('Matt Biitencourt'));
    expect(getByText('REPOSITORIES'));
    expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render Button with button and click', () => {
    const { asFragment, getByText } = render(
      <CardProfile name="Matt Biitencourt" biography="Hello, this is my Github profile" hasButton />,
    );

    fireEvent.click(getByText('REPOSITORIES'));
    expect(asFragment()).toMatchSnapshot();
  });
});
