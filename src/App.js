import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { calculateTotal } from './helper'
import Form from '../src/components/Form'

class app extends React.Component {

  state = {
    total: '',
    amount: '',
    term: ''
  }

  loadInfo = (amount, term) => {

    const total = calculateTotal(amount, term);

    this.setState({
      amount,
      term,
      total
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1> Loan Calculator</ h1>
        <div className='container'>
          <Form loadInfo={this.loadInfo} />
        </div>
      </React.Fragment >
    );
  }
}

export default app;
