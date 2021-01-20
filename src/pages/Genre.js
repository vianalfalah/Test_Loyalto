import { useState, useEffect } from "react";
import { connect } from "react-redux";

import getGenres from "../redux/reducer/genres";

function Genre() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenres(setGenres);
  }, []);

  const { data } = genres;
  return (
    <>
      <table className="table">
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>

        <tr>
          {/* <td>{+index + 1}</td> */}
          <td>{genres.name}</td>
        </tr>
      </table>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps From List IMage", state);
  return {
    genres: state.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: (data) => dispatch(getGenres(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
