import React from "react";
import Navbar from "../component/Navbar";

export default function Landing() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Landing Page
      </h1>
      <div
        style={{
          textAlign: "center",
          marginTop: 50,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          interdum justo lacinia, porta augue quis, pharetra velit. Morbi sit
          amet commodo nisl. Donec convallis tempus est, commodo euismod justo
          semper in. Nulla ac libero sed risus eleifend hendrerit sed at nibh.
          Nulla facilisi. Nam ultrices sapien ut nisi malesuada condimentum.
          Aliquam eu vehicula lectus, nec lacinia sem. Mauris tincidunt nulla
          sit amet dolor venenatis tristique. Duis tristique mollis sem, vel
          scelerisque sapien sodales eu. Ut condimentum risus id porttitor
          sollicitudin. Morbi eget semper augue, id mollis nulla. Duis eleifend
          lorem in velit rutrum, in sodales massa convallis. Nunc ullamcorper,
          nibh quis lacinia venenatis, neque risus iaculis nunc, vitae laoreet
          tellus nunc at lorem. In a dui vehicula, ullamcorper nulla eget,
          tristique sem. Maecenas eget quam ante. Suspendisse pretium sagittis
          feugiat. Integer laoreet sed lorem et molestie. Mauris eu nunc nisl.
          In augue eros, vulputate vitae viverra ut, fringilla sed libero.
          Quisque porta laoreet luctus. In convallis euismod euismod. Sed
          suscipit, urna ut facilisis suscipit, neque sem consectetur mi, eu
          consectetur diam ligula et libero. Etiam quis mauris interdum, aliquam
          metus sed, feugiat mi. Sed porttitor nisl quis erat porta finibus.
        </p>
      </div>
    </>
  );
}
