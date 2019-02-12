import React, { Component } from 'react';

class GetEmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerEmail: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      customerEmail: e.target.value
    });
  }

  submitEmail(e) {
    e.preventDefault();
    console.log(this.state.customerEmail);
    this.setState({
      customerEmail: ""
    });
  }

  render() {
    return (
      <form id="form" onSubmit={this.submitEmail}>
        <input type="email" id="email" name="email" className="form-control text-center text-sm-left d-xs-block d-sm-inline-block rounded-0" placeholder="Enter your email address" onChange={this.handleEmailChange} /><input type="submit" id="submit" name="submit" className="form-control d-xs-block d-sm-inline-block rounded-0" value="Get Free Consultation" />
      </form>
    );
  }
}

export default GetEmailForm;