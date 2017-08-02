import React from "react";
import sendMessage from "../utils/helpers";
import {
  FormControl,
  ControlLabel,
  FormGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  Addon,
  Form
} from "react-bootstrap";

class ContactForm extends React.Component {
  componentDidMount() {
    this.setState({ first_name: "" });
    this.setState({ last_name: "" });
    this.setState({ email: "" });
    this.setState({ phone: "" });
    this.setState({ message: "" });
  }
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      styles: null
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {
    // console.log('event',event.target.value);
    const inputValue = event.target.value;
    this.setState({ first_name: inputValue });
  }
  handleChangeLastName(event) {
    // console.log('event',event.target.value);
    const inputValue = event.target.value;
    this.setState({ last_name: inputValue });
  }
  handleChangeEmail(event) {
    // console.log('event',event.target.value);
    const inputValue = event.target.value;
    this.setState({ email: inputValue });
  }
  handleChangeNumber(event) {
    // console.log('event',event.target.value);
    const inputValue = event.target.value;
    this.setState({ phone: inputValue });
  }
  handleChangeMessage(event) {
    // console.log('event',event.target.value);
    const inputValue = event.target.value;
    this.setState({ message: inputValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: ""
    });

    let contactInfo = this.state;
    sendMessage(contactInfo)
      .then(res => console.log("Axios response:", res))
      .catch(err => console.log("Error in Axios: ", err));

    this.props.hideForm();
  }

  render() {
    return (
      <div className="form-container backdrop">
        <i
          className="fa fa-times fa-3x close-btn"
          aria-hidden="true"
          onClick={() => this.props.hideForm()}
        />
        <Form
          className="contact-form"
          name="contactform"
          method="post"
          // action="send_form_email.php"
          action="/message"
          enctype="text/plain"
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <FormGroup className="input-set">
            <FormGroup controlId="formInlineName">
              <InputGroup>
                <FormControl
                  type="text"
                  class="form-control"
                  required
                  placeholder="First Name"
                  name="first_name"
                  className="form-control"
                  ref="first_name"
                  value={this.state.name}
                  onChange={this.handleChangeFirstName}
                />
              </InputGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  required
                  placeholder="Last Name"
                  name="last_name"
                  className="form-control"
                  ref="last_name"
                  value={this.state.name}
                  onChange={this.handleChangeLastName}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <FormControl
                  id="formControlsEmail"
                  type="email"
                  required
                  className="form-control"
                  placeholder="example@domain.com"
                  name="email"
                  ref="email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <input
                  name="phone"
                  type="tel"
                  className="form-control"
                  maxlength="15"
                  pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
                  placeholder="Telephone Number"
                  ref="phone"
                  value={this.state.phone}
                  onChange={this.handleChangeNumber}
                />
              </InputGroup>
            </FormGroup>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Your Message</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Type message here..."
              required
              name="message"
              ref="message"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
          </FormGroup>
          <Button type="submit" className="send-btn">
            Send{' '} 
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;