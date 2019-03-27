import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components';

import {
  ContactWrapper,
} from './Contact.styles';

export class Contact extends Component {

  render() {

    return (
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    )

  }
}

export default connect((state) => ({

}), {

})(Contact);