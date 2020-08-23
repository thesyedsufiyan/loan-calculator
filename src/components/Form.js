import React from 'react';

class Form extends React.Component {
    state = {
        amount: '',
        term: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { amount, term } = this.state;

        this.props.loadInfo(amount, term);
    }

    handleClick = (e) => {
        const { name, value } = e.target;
        // console.log(value);

        this.setState({
            [name]: Number(value)
        })


    }


    validateForm() {
        const { amount, term } = this.state

        const notValid = !amount || !term

        return notValid
    }

    render() {

        const { amount } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Amount {this.props.hello}</label>
                    <input
                        onChange={this.handleClick}
                        name='amount'
                        type='number'
                        className='u-full-width'
                        placeholder='Eg: 2000' />
                </div>
                <div>
                    <label>Months to pay</label>
                    <select
                        onChange={this.handleClick}
                        name='term' className='u-full-width'>
                        <option value=''>select</option>
                        <option value='3'>3 months</option>
                        <option value='6'>6 months</option>
                        <option value='12'>12 months</option>
                        <option value='24'>24 months</option>
                    </select>
                </div>
                <div>
                    <input
                        disabled={this.validateForm()}
                        type='submit'
                        value='calculate'
                        className='u-full-width button-primary' />
                </div>
            </form>

        )
    }
}

export default Form;