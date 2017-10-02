import React from "react";
import SearchBar from "./Search_Bar";
import List from "./List";
import Detail from "./Detail";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h2>Youtube API</h2>
        <SearchBar />
        <hr />
        <div className="col-md-12">
          <Detail />
          <List />
        </div>
      </div>
    );
  }
}

export default Home;
