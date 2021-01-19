import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url); //allows us to make http requests, async-s
    const data = await (await response).json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.title}</div>
            <img src={this.state.person.picture.medium} />
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
          </div>
        )}
      </div>
    );
  }
}
