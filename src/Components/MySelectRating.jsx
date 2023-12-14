import Form from "react-bootstrap/Form";
import { MovieContext } from "../App";
import { useContext, useMemo } from "react";

function MySelectRating(props) {
  const { movies, setMovies, count } = useContext(MovieContext);
  const memoizedMovies = useMemo(() => movies, [count]);

  function handleSearch(e) {
    const rating = Number(e.target.value);
    if (!rating) {
      setMovies(memoizedMovies);
      return;
    }
    const filteredMovies = memoizedMovies.filter(
      (movie) => Math.round(movie.rating) === rating
    );
    setMovies(filteredMovies);
  }
  return (
    <Form.Select onChange={handleSearch} aria-label="Default select example">
      <option value={0}>select rating</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10</option>
    </Form.Select>
  );
}

export default MySelectRating;
