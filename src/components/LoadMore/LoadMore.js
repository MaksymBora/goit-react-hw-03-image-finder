import { LoadMoreButton } from './LoadMore.style';

export const LoadMore = ({ onClick, children }) => {
  return (
    <>
      <LoadMoreButton onClick={onClick}>{children}</LoadMoreButton>
    </>
  );
};
