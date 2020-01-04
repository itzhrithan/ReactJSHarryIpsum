import React, { Component } from 'react';
import { connect } from 'react-redux';
import Classes from './Form.module.css';
export class Form extends Component {
  render() {
    return (
      <section style={{ position: 'relative' }}>
        <form>
          <div className={'col-md-6 offset-md-5 ' + Classes.inputDiv}>
            &nbsp;&nbsp;&nbsp;I want &nbsp;
            <input
              type='number'
              max='50'
              min='2'
              onChange={event => {
                this.props.postNumber(event.target.value);
              }}
            />
            &nbsp; &nbsp;paragraphs of Magic&nbsp;&nbsp;
            <button type='button' onClick={this.props.receiveResult}>
              Receive Magic
            </button>
          </div>
        </form>
      </section>
    );
  }
}
const stateToProps = state => {
  return {
    counter: state.counter
  };
};

const dispatchActionToProps = dispatch => {
  return {
    postNumber: number =>
      dispatch({ type: 'POST_NUMBER', val: parseInt(number) }),
    receiveResult: event => dispatch({ type: 'RECEIVE_RESULT' })
  };
};

export default connect(stateToProps, dispatchActionToProps)(Form);
