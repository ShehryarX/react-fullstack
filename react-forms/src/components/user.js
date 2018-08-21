import React, { Component } from 'react';
import FormFields from '../Widgets/Forms/FormFields';

import { firebaseDB } from '../firebase';

class	User extends Component {
	state = {
		formData: {
			name: {
				element: 'input',
				value: '',
				label: true,
				labeltext: 'Name',
				config: {
					name: 'name_input',
					type: 'text',
					placeholder: 'Enter your name'
				},
				validation: {
					required: true,
					minlength: 5,
				},
				valid: false,
				touched: false,
				validationMessage: ''
			},
			lastname: {
				element: 'input',
				value: '',
				label: true,
				labeltext: 'Last Name',
				config: {
					name: 'lastname_input',
					type: 'text',
					placeholder: 'Enter your last name'
				},
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
				validationMessage: ''
			},
			message: {
				element: 'textarea',
				value: '',
				label: true,
				labeltext: 'Message',
				config: {
					name: 'message_input',
					rows: 4,
					cols: 36
				},
				validation: {
					required: false,
				},
				valid: true,
				true: false,
				validationMessage: ''
			},
			age: {
				element: 'select',
				value: '',
				label: 'true',
				labeltext: 'Age',
				config: {
					name: 'age_input',
					options: [
						{ val: '1', text: '10-20' },
						{ val: '2', text: '20-30' },
						{ val: '3', text: '30+' },
					]
				},
				validation: {
					required: false,
				},
				valid: true,
				touched: false,
				validationMessage: ''
			}
		}
	}

	updateForm = (newState) => {
		this.setState({
			formdata: newState,
		})
	}

	submitForm = (event) => {
		event.preventDefault();

		let dataToSubmit = {};
		let formIsValid = true;

		for (let key in this.state.formData) {
			dataToSubmit[key] = this.state.formData[key].value;
		}

		for (let key in this.state.formData) {
			formIsValid = this.state.formData[key].valid && formIsValid;
		}

		if (formIsValid) {
			firebaseDB.ref('user').push(dataToSubmit)
				.then(() => console.log('New user added.'))
				.catch(err => console.log(err));
		}
	}

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.submitForm}>
					<FormFields 
						formdata={this.state.formData}
						change={newState => this.updateForm(newState)}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default User;