import React from "react";
import { fetchTube } from "../actions/searchAction";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <div className="col-md-3 float-right">
        {this.props.videos ? (
          this.props.videos.map((node, index) => (
            <a href="#" className="card" key={index}>
              <img
                className="card-img-top"
                src={node.snippet.thumbnails.default.url}
              />
              <p className="card-title">{node.snippet.title}</p>
            </a>
          ))
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos.all
});

export default connect(mapStateToProps)(List);
