import { React, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { MovieContext } from "../App";

const AddMovie = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [rating, setRating] = useState(0);
  let [posterURL, setPosterURL] = useState("");
  const { setMovies, setCount, count } = useContext(MovieContext);

  function addMovie(e) {
    e.preventDefault();
    if (title && description && rating && posterURL) {
      setMovies((preValue) => [
        ...preValue,
        { id: Math.random(), title, description, rating, posterURL },
      ]);
      setCount(count + 1);
      setTitle("");
      setDescription("");
      setRating(0);
      setPosterURL("");
    }
  }

  return (
    <Form inline>
      <h3>Add new movie</h3>
      <Form.Group controlId="formInlineName">
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          type="Title"
          placeholder="Title"
          value={title}
        />
      </Form.Group>
      <Form.Group controlId="formInlineEmail">
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="Description"
          placeholder="Description"
          value={description}
        />
      </Form.Group>{" "}
      <Form.Group controlId="formInlineEmail">
        <Form.Select
          onChange={(e) => setRating(Number(e.target.value))}
          aria-label="Default select example"
          value={rating}
        >
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
      </Form.Group>{" "}
      <Form.Group controlId="formInlineEmail">
        <Form.Control
          onChange={(e) => setPosterURL(e.target.value)}
          type="posterURL"
          placeholder="poster URL"
          value={posterURL}
        />
      </Form.Group>{" "}
      <Button
        type="submit"
        onClick={addMovie}
        disabled={!title && !description && !posterURL}
      >
        Add
      </Button>
    </Form>
  );
};

export default AddMovie;
