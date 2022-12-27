import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            firstName: '',
            lastName: '',
            email: '',
        };

        this.state = this.initialState;

        this.state = { count: 1 };
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        });
    }

    render() {
        const { firstName, lastName, email } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <table>
                    <tr>
                        <th></th>
                        <th><label for="firstName">FirstName</label></th>
                        <th><label for="lastName">LastName</label></th>
                        <th><label for="email">Email</label></th>
                    </tr>
                    <tr>
                        <th>
                            <button type="submit">
                                Add User
                            </button>
                        </th>
                        <th>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={this.handleChange} />
                        </th>
                        <th>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={this.handleChange} />
                        </th>
                        <th>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={this.handleChange} />
                        </th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Form;
