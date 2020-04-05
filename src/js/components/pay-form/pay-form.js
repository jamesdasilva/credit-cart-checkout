import React, { Component } from 'react';
import './pay-form.scss';
import PayFormInput from '../pay-form-input/pay-form-input';

class PayForm extends Component {
	constructor(props) {
    super(props);
		this.state = {
			cardCode: '',
			people: '',
			shelfLife: '',
			cvv: '',
			installments: ''
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.updateCardCode = this.updateCardCode.bind(this);
	}
	submitHandler(event) {
		event.preventDefault();
		console.log('submitHandler');
		console.log(this.state);
	}
	insertChar(string, char, position) {
		return string.slice(0, position) + char + string.slice(position, string.length - 1);
	}
	updateCardCode(e){
		const { value } = e.currentTarget;
		console.log(value.leng);
		let newValue = value && (value.length == 4 || value.length == 9) ? value + ' ' : value;
		console.log(newValue);
		this.setState(prevState => ({
			...prevState,
			cardCode: /^[0-9 ]*$/.test(newValue) ? newValue : prevState.cardCode 
		}));
	}
	render(){
		return (
			<form className="pay-form" onSubmit={this.submitHandler}>
				<PayFormInput 
					label="Número do cartão"
					charSet="digits"
					separator={' '}
					positions={[4, 9, 14]}
					length={19}></PayFormInput>
				<PayFormInput 
					label="Nome (igual ao cartão)"
					charSet="alpha"
					separator={' '}
					positions={[4, 9, 14]}
					length={19}></PayFormInput>

				<div className="pay-form__row">
					<PayFormInput 
						label="Validade"
						charSet="digits"
						separator={'/'}
						positions={[2]}
						length={5}></PayFormInput>

					<div className="">
						<PayFormInput 
							label="CVV"
							charSet="digits"
							length={3}></PayFormInput>
					</div>
				</div>
				<select 
					className="pay-form__select"
					value={this.state.installments}
					onChange={(e) => this.setState({ installments: e.target.value })}
					placeholder="Número de parcelas">
					<option value="">Número de parcelas</option>
					<option value="1">1X</option>
					<option value="3">3X</option>
					<option value="5">5X</option>
					<option value="10">10X</option>
				</select>
				<div className="pay-form__btn-submit-container">
					<input className="pay-form__btn-submit" type="submit" value="CONTINUAR" />
				</div>
			</form>
		);
	}
}

export default PayForm;
