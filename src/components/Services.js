import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [{ icon: <FaCocktail />, title: "" }],
  };
  render() {
    return (
      <div>
        <Title title="Services"></Title>
      </div>
    );
  }
}
