import React, { Component } from "react";
const RoomContext = React.createContext();
//provider and consumer

export default class RoomProvider extends Component {
  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.state.children}
      </RoomContext.Provider>
    );
  }
}
