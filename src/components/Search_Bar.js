import React from "react";
import { fetchTube } from "../actions/searchAction";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchTube(this.state.value));
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
        </div>
      </form>
    );
  }
}

export default connect()(SearchBar);
