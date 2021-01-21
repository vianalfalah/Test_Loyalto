import { useEffect } from "react";
import { API } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";

function Genre() {
  const data = useSelector((state) => state.listGenres);
  const dispatch = useDispatch();

  const res = async () => {
    const response = await API(
      "/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
    );

    await dispatch({
      type: "GET_ALL_GENRES",
      data: response.data.genres,
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
          <th>Name</th>
        </tr>

        {data.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Genre;
