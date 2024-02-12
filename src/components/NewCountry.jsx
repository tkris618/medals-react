import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PlusCircleFill } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

class NewCountry extends Component {
  state = {
    showModal: false,
    newCountryName: "",
    showToast: false,
  }
  handleModalClose = () => this.setState({ showModal: false });
  handleModalKeyPress = (e) => (e.keyCode ? e.keyCode : e.which) === 13 && this.handleAdd();
  handleAdd = () => {
    this.state.newCountryName.length > 0 && this.props.onAdd(this.state.newCountryName);
    this.handleModalClose();
    this.setState({showToast: true});
  }
  handleToastClose = () => this.setState({ showToast: false});
  handleToast = () => {
    if (this.state.newCountryName.length === 0){
      this.state.showToast(false);
      this.handleToastClose();
    }
  }
 

  render() { 
    return (
      <React.Fragment>
        <Button variant="outline-success" onClick={ () => this.setState({ showModal: true, newCountryName: "" })}>
          <PlusCircleFill />
        </Button>
        <Modal onKeyPress={ this.handleModalKeyPress } show={ this.state.showModal }  onHide={ this.handleModalClose }>
          <Modal.Header closeButton>
            <Modal.Title>New Country</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="modalForm1">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                name="newCountryName"
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                value={ this.state.newCountryName }
                placeholder="enter name"
                autoFocus
                autoComplete='off'
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={ this.handleModalClose }>              Close
            </Button>
            <Button variant="primary" onClick={ this.handleAdd }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    <Toast show={this.state.showToast} onHide={this.handleToastClose} >
      <Toast.Header >
        <strong>Country Name Required</strong>
      </Toast.Header>
      <Toast.Body>
        <p>Enter a name to add a new country</p>
      </Toast.Body>
    </Toast>
      </React.Fragment>
    );
  }
}

export default NewCountry;