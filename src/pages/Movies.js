import { useEffect } from "react";
import { API } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Movies() {
  const data = useSelector((state) => state.listMovies);
  const dispatch = useDispatch();

  const res = async () => {
    const response = await API(
      "movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1"
    );

    await dispatch({
      type: "GET_ALL_MOVIES",
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
            <td>{item.backdrop_path}</td>
            <td>{item.original_language}</td>
            <td>{item.genre_ids + ", "}</td>
            <td>{item.popularity}</td>
            <td>{item.adults + toString()} </td>
            <td>{item.release_date}</td>
            <td>{item.vote_average}</td>
            <td>{item.vote_count}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Movies;
