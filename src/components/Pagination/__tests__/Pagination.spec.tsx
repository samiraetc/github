import React from 'react';
import { configure, fireEvent, render } from '@testing-library/react';

import Pagination, { COMPONENT_ID } from '../Pagination';

describe('Pagination', () => {
  const onClick = jest.fn();
  test('should render Pagination', () => {
    configure({
      testIdAttribute: 'id',
    });

    const { asFragment, getByTestId } = render(
      <Pagination
        className="pagination-bar"
        currentPage={1}
        totalCount={10}
        pageSize={5}
        onPageChange={() => onClick()}
      />,
    );
    expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render Pagination and click on second page', () => {
    const { asFragment, getByTestId } = render(
      <Pagination
        className="pagination-bar"
        currentPage={1}
        totalCount={10}
        pageSize={5}
        onPageChange={() => onClick(2)}
      />,
    );

    configure({
      testIdAttribute: 'class',
    });
    fireEvent.click(getByTestId('arrow right'));
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render Pagination and click to back to first page', () => {
    const { asFragment, getByTestId } = render(
      <Pagination
        className="pagination-bar"
        currentPage={2}
        totalCount={10}
        pageSize={5}
        onPageChange={() => onClick(2)}
      />,
    );

    configure({
      testIdAttribute: 'class',
    });
    fireEvent.click(getByTestId('arrow left'));
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render Pagination when has dots ...', () => {
    configure({
      testIdAttribute: 'id',
    });

    const { asFragment, getByTestId, getByText } = render(
      <Pagination
        className="pagination-bar"
        currentPage={1}
        totalCount={20}
        pageSize={2}
        onPageChange={() => onClick(2)}
      />,
    );
    expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
    fireEvent.click(getByText('2'));
    expect(asFragment()).toMatchSnapshot();
  });
});
