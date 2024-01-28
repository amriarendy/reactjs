import React, { Component } from "react";
import { Badge, Col, Collapse, Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class Result extends Component {
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
                <ListGroup.Item>
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
            </ListGroup>
          )}
        </h4>
      </Col>
    );
  }
}
