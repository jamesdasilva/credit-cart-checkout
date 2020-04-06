import React, { Component } from 'react';
import './pay-form.scss';
import PayFormInput from '../pay-form-input/pay-form-input';
import PayFormSelect from '../pay-form-input-select/pay-form-input-select';

class PayForm extends Component {
	constructor(props) {
    super(props);
		this.state = {
			cardCode: {
        value: '',
        isValid: undefined
      },
			people: {
        value: '',
        isValid: undefined
      },
			shelfLife: {
        value: '',
        isValid: undefined
      },
			cvv: {
        value: '',
        isValid: undefined
      },
			installments: {
        value: '',
        isValid: undefined
      },
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.update = this.update.bind(this);
	}
	update(value){
    const obj = { };
    obj[`${value.name}`] = { }
    obj[`${value.name}`]['value'] = value.value;
    obj[`${value.name}`]['isValid'] = value.isValid;
		this.setState(obj);
	}
	submitHandler(event) {
		event.preventDefault();
		console.log('submitHandler');
		console.log(this.state);
	}
	render(){
		console.log('form', this.state);
		return (
			<form className="pay-form" onSubmit={this.submitHandler}>

				<PayFormInput 
					name="cardCode"
          label="Número do cartão"
          invalidMsg="Número de cartão inválido"
					charSet="digits"
					update={this.update}
					separator={' '}
					positions={[4, 9, 14]}
					length={19}></PayFormInput>

				<PayFormInput 
					name="people"
          label="Nome (igual ao cartão)"
          invalidMsg="Insira seu nome completo"
					update={this.update}
					charSet="alpha"
					></PayFormInput>

				<div className="pay-form__row">

					<PayFormInput 
						name="shelfLife"
            label="Validade"
            invalidMsg="Data inválida"
						update={this.update}
						charSet="digits"
						separator={'/'}
						positions={[2]}
						length={5}></PayFormInput>

					<PayFormInput 
						name="cvv"
            label="CVV"
            invalidMsg="Código inválido"
						update={this.update}
						charSet="digits"
						length={3}></PayFormInput>

				</div>

        <PayFormSelect
          name="installments"
          label="Número de parcelas"
          invalidMsg="Insira o número de parcelas"
          update={this.update}></PayFormSelect>

				<div className="pay-form__btn-submit-container">
					<input 
						className="pay-form__btn-submit"
						type="submit" value="CONTINUAR" />
				</div>
			</form>
		);
	}
}

export default PayForm;
