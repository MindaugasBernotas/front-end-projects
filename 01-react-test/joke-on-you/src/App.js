import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <ul>
          {items.map((item) => (
            <li key={item.joke}> jokes: {item.joke} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
