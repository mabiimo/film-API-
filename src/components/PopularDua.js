import React from "react";
import { getMovieList } from "../api";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const PopularDua = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setpopularMovies(result);
    });
  }, []);

  return popularMovies.map((movie, i) => {
    return (
      <div className="pt-5">
        <Container fluid>
          <Row>
            <Col>
              <Card className="Card-body" style={{ width: "18rem" }}>
                <Card.Body className="Card-body">
                  <div className="Card-title"> {movie.title}</div>
                  <img class="card-img-top" src={`${"https://image.tmdb.org/t/p"}/${"w300"}${movie.poster_path}`} alt="Card image cap" />
                  <Card.Text className="text-primary">{movie.release_date}</Card.Text>
                  <Card.Text className="text-primary">{movie.vote_average}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
};

export default PopularDua;
