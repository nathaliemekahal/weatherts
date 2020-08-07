import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface result {
  data: {
    coord: Coord;
    weather: Weatherinfo[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}
interface Clouds {
  all: number;
}
interface Coord {
  lon: number;
  lat: number;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
interface Weatherinfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Wind {
  speed: number;
  deg: number;
}
interface SearchQuery {
  query: string;
  result: Response;
}
export default function Results({ data }: result) {
  return (
    <>
      {/* {data.id !== 0 && ( */}
      <Row md={2} className="results-wrapper">
        <Col className="title-col-container">
          <h1 className="title-class">{data.name}</h1>
        </Col>

        <Col className="clipart-col-container">
          <h3 id="temp">
            {/* {Math.floor(data.main.temp - 273.15)} */}
            12
            {/* Feels like{" "}
              {data.main.feels_like - 273.15}
              <br />
              {data.main.humidity}
              <br />
              {data.main.pressure} */}
          </h3>
          <img
            className="circle mb-3 ml-5"
            src="sun.svg"
            width="170px"
            alt=""
          />
        </Col>
      </Row>
      {/* )} */}
    </>
  );
}
