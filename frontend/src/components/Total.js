import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class Total extends Component {
  submitTotalPayment = (totalPayment) => {
    const order = {
      total_bayar: totalPayment,
      menus: this.props.carts,
    };
    axios.post(API_URL + "pesanans", order).then((res) => {
      this.props.history.push("/success");
    });
  };

  render() {
    const totalPayment = this.props.carts.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              TOTAL:{" "}
              <strong className="pull-right mr-2">
                Rp{numberWithCommas(totalPayment)}
              </strong>
            </h4>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                className="mb-2 mt-2 mr-2"
                onClick={() => this.submitTotalPayment(totalPayment)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> <strong>PAY</strong>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
