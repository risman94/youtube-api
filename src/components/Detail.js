import React from "react";
import { fetchTube } from "../actions/searchAction";
import { connect } from "react-redux";

class Detail extends React.Component {
  render() {
    return (
      <div className="col-md-9 float-left">
        {!this.props.videos ? (
          this.props.videos.map((video, index) => (
            <div className="embed-responsive embed-responsive-4by3" key={index}>
              <iframe
                className="embed-responsive-item"
                src={video.id.videoId}
              />
            </div>
          ))
        ) : (
          "loading..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos.all
});

export default connect(mapStateToProps)(Detail);
