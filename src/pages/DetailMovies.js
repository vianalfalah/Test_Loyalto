import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../config/api";
import { useDispatch, useSelector } from "react-redux";

function DetailMovies() {
  const data = useSelector((state) => state.detailMovies);
  const id = useParams;
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

  console.log(data);

  return (
    <>
      <table className="table">
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>

        {data.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.original_title}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default DetailMovies;
