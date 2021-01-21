import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { URLimg } from "../config/api";
import Navbar from "../component/Navbar";

function DetailMovies() {
  const data = useSelector((state) => state.detailMovies);
  const { id } = useParams();
  const dispatch = useDispatch();

  const res = async () => {
    const response = await API(
      `movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`
    );

    await dispatch({
      type: "GET_DETAIL_MOVIE",
      data: response.data,
    });
  };

  useEffect(() => {
    res();
  }, []);

  console.log("data", data);

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="detail">
        <div className="backdrop">
          <img src={`${URLimg}${data.backdrop_path}`} alt="" />
        </div>
        <div className="wrap1">
          <div className="poster">
            <img src={`${URLimg}${data.poster_path}`} alt="" />
          </div>
          <div className="desc">
            <h2>{data.title}</h2>
            <p>{data.overview}</p>
            <p>Release Date : {data.release_date}</p>
            <p> Language : {data.original_language}</p>
            <p>
              Genres :{" "}
              {data.genres &&
                data.genres.map((item) => {
                  return <> {item.name}</>;
                })}
            </p>

            <strong>Status : {data.status}</strong>
          </div>
          <div className="desc2">
            <p>Tagline : {data.tagline}</p>
            <p>Popularity : {data.popularity}</p>
            <p>Budget : {data.budget}</p>
            <p>IMDB ID : {data.imdb_id}</p>
            <p>
              Homepage :{" "}
              <a href={data.homepage} target="_blank">
                {data.homepage}
              </a>
            </p>

            <p>Vote Average : {data.vote_average}</p>
            <p>Vote Count : {data.vote_count}</p>
          </div>
          <div className="desc3">
            <p>Production Companies :</p>
            {data.production_companies &&
              data.production_companies.map((item) => {
                return (
                  <>
                    {item.name} <br />{" "}
                  </>
                );
              })}
            <p>Production Countris :</p>
            {data.production_countries &&
              data.production_countries.map((item) => {
                return (
                  <>
                    {item.name} <br />{" "}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovies;
