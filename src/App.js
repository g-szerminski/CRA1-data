import React from "react";
import "./App.css";

const data = [
  { id: 1, title: "Wiadomość nr 1", body: "Zawartość wiadomości numer 1" },
  { id: 2, title: "Wiadomość nr 2", body: "Zawartość wiadomości numer 2" }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości numer ${index}`
  });
  console.log(data);
}, 8000);

class App extends React.Component {
  state = {
    comments: [...data] //tutaj tworzymy nową tablicę, nie referencję
    // comments: data
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("aktualizacja");
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("nie aktualizuje - dane takie same");
    }
  };
  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <h1>{comment.body}</h1>
      </div>
    ));
    // console.log(comments);

    return <div className='App'>{comments}</div>;
  }
}

export default App;
