import React, { Component } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import Total from "./Total";
import CartModal from "./CartModal";

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      cartDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (cartMenus) => {
    this.setState({
      showModal: true,
      cartDetail: cartMenus,
      jumlah: cartMenus.jumlah,
      keterangan: cartMenus.keterangan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  plus = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  minus = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };

  changeHendler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  hendleSubmit = (event) => {
    event.preventDefault();
    console.log("Hi", this.state.keterangan);
  };

  render() {
    const { carts } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Result</strong>
          <hr />
          {carts.length !== 0 && (
            <ListGroup variant="flush">
              {carts.map((cartMenus) => (
                <ListGroup.Item
                  key={cartMenus.id}
                  onClick={() => this.handleShow(cartMenus)}
                >
                  <Row>
                    <Col xs={2}>
                      <h4>
                        <Badge pill variant="success">
                          {cartMenus.jumlah}
                        </Badge>
                      </h4>
                    </Col>
                    <Col>
                      <h5>{cartMenus.product.nama}</h5>
                      <p>Rp{numberWithCommas(cartMenus.product.harga)}</p>
                    </Col>
                    <Col>
                      <strong className="float-right">
                        Rp{numberWithCommas(cartMenus.total_harga)}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <CartModal
                handleClose={this.handleClose}
                {...this.state}
                plus={this.plus}
                minus={this.minus}
                changeHandler={this.changeHendler}
                hendleSubmit={this.hendleSubmit}
              />
            </ListGroup>
          )}
          <Total carts={carts} {...this.props} />
        </h4>
      </Col>
    );
  }
}
