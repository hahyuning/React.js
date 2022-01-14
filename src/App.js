import React from "react";
import Todo from "./Todo";
import "./App.css";
import { List, Paper } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [ 
        { id: 0, title: "Hello World", done: true },
        { id: 1, title: "Hello World", done: false },
      ],
    };
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))};
        </List>
      </Paper>
    );

    return <div className="App">{todoItems}</div>
  }
}

export default App;
