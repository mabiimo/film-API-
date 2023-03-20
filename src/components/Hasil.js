import React from "react";
import { getMovieList } from "../api";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavbarComponents from "./NavbarComponents";

const Hasil = () => {
  return (
    <div className="pt-5">
      <NavbarComponents />
    </div>
  );
};

export default Hasil;
