import Form from "react-bootstrap/Form";
import { useContext, useMemo } from "react";
import { MovieContext } from "../App";
import { useState } from "react";

function MySelectTitle(props) {
  const { movies, setMovies, count } = useContext(MovieContext);
  const memoizedMovies = useMemo(() => movies, [count]);

  function handleSearch(e) {
    if (!e.target.value) {
      setMovies(memoizedMovies);
      return;
    }
    const filteredMovies = memoizedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMovies(filteredMovies);
  }
  return (
    <Form.Group controlId="formInlineName">
      <Form.Control type="Title" placeholder="Title" onChange={handleSearch} />
    </Form.Group>
  );
}

export default MySelectTitle;
