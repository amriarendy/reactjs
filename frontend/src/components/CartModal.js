import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartModal = ({
  showModal,
  handleClose,
  cartDetail,
  jumlah,
  keterangan,
  plus,
  minus,
  changeHandler,
  handleSumbit,
}) => {
  if (cartDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {cartDetail.product.nama}
            <strong> (Rp{numberWithCommas(cartDetail.product.harga)})</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Total :</Form.Label>
              <p>
                <strong>Rp{numberWithCommas(cartDetail.total_harga)}</strong>
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Amount :</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={() => plus()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <strong> {jumlah} </strong>
              <Button
                variant="primary"
                size="sm"
                className="ml-2"
                onClick={() => minus()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                placeholder="Example: Spicy Level 5"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <FontAwesomeIcon icon={faTrash} /> Delete Order
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default CartModal;
