import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <Link to="/login"> <button className="login">Login</button> </Link>
      </div>
    );
  }
}

export default Home;