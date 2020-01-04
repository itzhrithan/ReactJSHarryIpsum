import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paragraphs from './Paragraphs/Paragraphs';
export class ParaMagic extends Component {
  render() {
    return (
      <section style={{ marginTop: '150px' }}>
        {this.props.showResult ? (
          <Paragraphs counter={this.props.counter} />
        ) : null}
      </section>
    );
  }
}
const stateToProps = state => {
  return {
    counter: state.counter,
    showResult: state.showResult
  };
};
export default connect(stateToProps)(ParaMagic);
