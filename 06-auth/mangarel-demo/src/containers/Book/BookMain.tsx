import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import useBook from 'hooks/use-book';
import BookMain from 'components/Book/BookMain';
import paths from 'paths';

const BookMainContainer: FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  if (!bookId) navigate(paths.home, {replace:true});
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { book } = useBook(bookId!);

  return book ? <BookMain book={book} /> : <div />;
};

export default BookMainContainer;
