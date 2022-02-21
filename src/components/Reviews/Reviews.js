import { useLocation } from 'react-router-dom';

const Reviews = () => {
  const {
    state: {
      reviews: { results },
    },
  } = useLocation();

  return (
    <>
      <ul>
        {results.length !== 0 ? (
          results.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
