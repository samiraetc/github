import React from 'react';
import { configure, render } from '@testing-library/react';

import CardRepositories, { COMPONENT_ID } from '../CardRepositories';

configure({
  testIdAttribute: 'id',
});

describe('CardRepositories', () => {
  test('should render CardRepositories', () => {
    const { getByTestId } = render(
      <CardRepositories
        name="Repositories"
        description="This is a project"
        language="Javascript"
        type="Public"
        updated="2020-10-22T18:10:27Z"
        id={1}
      />,
    );
    expect(getByTestId(COMPONENT_ID));
  });
});
