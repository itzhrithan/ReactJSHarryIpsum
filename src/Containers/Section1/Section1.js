import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import Form from '../Form/Form';
import ParaMagic from '../ParaMagic/ParaMagic.js';
export class Section1 extends Component {
  render() {
    return (
      <section>
        <Carousel />
        <Form />
        <ParaMagic />
      </section>
    );
  }
}

export default Section1;
