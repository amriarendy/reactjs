import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/success.png" />
        <h2>Success</h2>
        <p>Thank You!!</p>
        <Button variant="primary" as={Link} to="/">
          Back
        </Button>
      </div>
    );
  }
}
