import { useMemo } from 'react';

export const DOTS = '...';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export type usePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export const usePagination = ({
  totalCount = 1,
  pageSize = 6,
  siblingCount = 1,
  currentPage = 1,
}: usePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    const ItemCount = 3 + 2 * siblingCount;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const shouldRenderDots = new Map([
      [!shouldShowLeftDots && shouldShowRightDots, [...range(1, ItemCount), DOTS, totalPageCount]],
      [
        shouldShowLeftDots && !shouldShowRightDots,
        [firstPageIndex, DOTS, ...range(totalPageCount - ItemCount + 1, totalPageCount)],
      ],
      [
        shouldShowLeftDots && shouldShowRightDots,
        [firstPageIndex, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, lastPageIndex],
      ],
    ]);

    return shouldRenderDots.get(true);
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
