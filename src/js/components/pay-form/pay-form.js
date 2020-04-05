import React, { Component } from 'react';
import './pay-form.scss';

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
	}
	submitHandler(event) {
		event.preventDefault();
		console.log('submitHandler');
		console.log(this.state);
	}
	render(){
		return (
			<form className="pay-form" onSubmit={this.submitHandler}>
				<input 
					className="pay-form__input"
					type="text"
					value={this.state.cardCode}
					onChange={(e) => this.setState({ cardCode: e.target.value })}
					placeholder="Número do cartão"></input>
				<input 
					className="pay-form__input"
					type="text"
					value={this.state.people}
					onChange={(e) => this.setState({ people: e.target.value })}
					placeholder="Nome (igual ao cartão)"></input>
				<div className="pay-form__row">
					<input 
						className="pay-form__input"
						type="text"
						value={this.state.shelfLife}
						onChange={(e) => this.setState({ shelfLife: e.target.value })}
						placeholder="Validade"></input>
					<div className="">
						<input 
							className="pay-form__input"
							type="text"
							value={this.state.cvv}
							onChange={(e) => this.setState({ cvv: e.target.value })}
							placeholder="CVV"></input>
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
