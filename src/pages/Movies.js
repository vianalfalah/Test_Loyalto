import { useEffect, useState } from "react";
import { API } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URLimg } from "../config/api";
import Navbar from "../component/Navbar";
function Movies() {
  const data = useSelector((state) => state.listMovies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const res = async () => {
    const response = await API(
      `movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`
    );

    await dispatch({
      type: "GET_ALL_MOVIES",
      data: response.data.results,
    });
  };
  const handleNext = async () => {
    setPage(page + 1);
    const response = await API(
      `movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`
    );

    await dispatch({
      type: "GET_ALL_MOVIES",
      data: response.data.results,
    });
  };
  const handlePrev = async () => {
    if (page === 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }

    const response = await API(
      `movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`
    );

    await dispatch({
      type: "GET_ALL_MOVIES",
      data: response.data.results,
    });
  };

  useEffect(() => {
    res();
  }, []);

  console.log(data);

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <table className="table">
        <tr>
          <th>No</th>

          <th>Title</th>

          <th>Backdrop</th>
          <th>Language</th>
          <th>Genre</th>
          <th>Popularity</th>
          <th>Adults</th>
          <th>Release Date</th>
          <th>Vote Average</th>
          <th>Vote Count</th>
        </tr>

        {data.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <Link to={`/detail/${item.id}`} key={item.id}>
                {item.original_title}
              </Link>
            </td>
            <td>
              <img src={`${URLimg}${item.backdrop_path}`} alt="" />
            </td>
            <td>{item.original_language}</td>
            <td>{item.genre_ids + ", "}</td>
            <td>{item.popularity}</td>
            <td>{item.adults ? "Yes" : "No "} </td>
            <td>{item.release_date}</td>
            <td>{item.vote_average}</td>
            <td>{item.vote_count}</td>
          </tr>
        ))}
      </table>
      <div className="button">
        <button className="btn" onClick={handlePrev}>
          Previous
        </button>
        <h2>{page} of 14</h2>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default Movies;
