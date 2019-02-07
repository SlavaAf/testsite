import React from 'react';
import styles from "./sending.css";
// import { YMInitializer } from '../../react-yandex-metrika/';
// import ym from '../../react-yandex-metrika/';


class Form extends React.Component {
	constructor(props) {
		super(props);
		// console.log(this.props.lang)
    this.state = {error: true};

    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		// console.log(event.target);
		var element = event.target;
			switch(element.name){
				case "name":
					if(element.value.length <= 2){
						element.parentElement.classList.remove(styles.form__accept);
						element.dataset.error = false;
						if(element.value.length === 0){
							element.parentElement.classList.remove(styles.form__error)
						}else{
							element.parentElement.classList.add(styles.form__error)
						}
					}else{
						element.parentElement.classList.remove(styles.form__error);
						element.parentElement.classList.add(styles.form__accept);
						element.dataset.error = true;
					}
					break;
				case "email":
			    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if(element.value.length === 0 ){
						element.parentElement.classList.remove(styles.form__error);
						element.parentElement.classList.remove(styles.form__accept);
						element.dataset.error = false;
					}else{
						if(re.test(element.value)){
							element.parentElement.classList.remove(styles.form__error)
							element.parentElement.classList.add(styles.form__accept)
							element.dataset.error = true;
						}else{
							element.parentElement.classList.add(styles.form__error)
							element.parentElement.classList.remove(styles.form__accept)
							element.dataset.error = false;
						}
					}
					break;
				case "phone":
					if(element.value.length === 0 ){
						element.parentElement.classList.remove(styles.form__error)
						element.parentElement.classList.remove(styles.form__accept)
						element.dataset.error = false;
					}else{
						element.parentElement.classList.add(styles.form__accept)
						element.parentElement.classList.remove(styles.form__error)
						element.dataset.error = true;
					}
					break;
				case "message":
					if(element.value.length === 0 ){
						element.parentElement.classList.remove(styles.form__error)
						element.parentElement.classList.remove(styles.form__accept)
						element.dataset.error = false;
					}else{
						if(element.value.length < 255 ){
							element.parentElement.classList.remove(styles.form__error)
							element.parentElement.classList.add(styles.form__accept)
							element.dataset.error = true;
						}else{
							element.parentElement.classList.add(styles.form__error)
							element.parentElement.classList.remove(styles.form__accept)
							element.dataset.error = false;
						}
					}
					break;
				case "politica":
					// console.log(element.checked)
					if(element.checked){
						element.parentElement.classList.remove(styles.form__error)
						element.dataset.error = true;
					}else{
						element.parentElement.classList.add(styles.form__error)
						element.dataset.error = false;
					}
					break;
				default:
					break;
			}
	}
	handleSubmit(event) {
		event.preventDefault();
		var parent   = event.target,
				elements = parent.querySelectorAll("[required]"),
				error    = false;

			for(var i=0; i < elements.length; i++){
				if(elements[i].dataset.error === "false"){
					elements[i].parentElement.classList.add(styles.form__error);
					error = true;
				}else{
					elements[i].parentElement.classList.remove(styles.form__error)
				}
			}

		if(!error){
			var message = "";
			for(var i=0; i < elements.length; i++){
				var name  = elements[i].name,
						type  = elements[i].type,
						value = elements[i].value,
						text  = "<h1>Customer's " + name + " - " + value + "</h1>";

				if(type !== "checkbox"){
					message += text;
				}else{
					elements[i].checked = false;
				}
				elements[i].value = "";
				elements[i].parentElement.classList.remove(styles.form__accept)
			}
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
	    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState === 4) {
	            if(xmlhttp.status === 200) {
								// console.log(message);
								// ym('reachGoal', 'ORDER_2');
								var el = document.querySelector("."+styles.form__out);
								el.classList.add(styles.form__out_active);
								setTimeout(function(){
									el.classList.remove(styles.form__out_active);
								},1000)
	            }
	            // else if(xmlhttp.status == 500) alert('Check apikey')
	            else alert('Пожалуйста, проверьте соединение с интернетом или перезапустите браузер. После этого отправьте заявку снова.');
	        }
	    }
	    xmlhttp.send(JSON.stringify({'key': '3nHfBfKZxETJ-VYZjMx4cw',
	       'message': {
	           'from_email': 'chernika@smter.ru',
	           'to': [{'email': "hello@chernika.pro", 'type': 'to'}],
	           'autotext': 'true',
	           'subject': "Заявка с сайта",
	           'html': message
	        }
	    }));
		}
	}

	render() {
		return(
			<form className={styles.form} onSubmit={ this.handleSubmit } noValidate>

				<label className={styles.form__block}>
					<input className={styles.form__input + [" field_out"]} type="text" name="name" id="f_name" placeholder={ this.props.text.placeholder_1} required onChange={this.handleChange} data-error="false"/>
					<span className={styles.form__block__help}>{ this.props.text.error_1}</span>
				</label>
				<label className={styles.form__block}>
					<input className={styles.form__input + [" field_out"]} type="email" name="email" id="" placeholder={ this.props.text.placeholder_2} required onChange={this.handleChange} data-error="false"/>
					<span className={styles.form__block__help}>{ this.props.text.error_2}</span>
				</label>
				<label className={styles.form__block}>
					<input className={styles.form__input + [" field_out"]} type="tel" name="phone" id="" placeholder={ this.props.text.placeholder_3} required onChange={this.handleChange} data-error="false"/>
					<span className={styles.form__block__help}>{ this.props.text.error_3}</span>
				</label>
				<label className={styles.form__block}>
					<textarea className={styles.form__textarea + [" field_out"]} name="message" id="" placeholder={ this.props.text.placeholder_4} required onChange={this.handleChange} data-error="false"></textarea>
					<span className={styles.form__block__help}>{ this.props.text.error_4}</span>
				</label>
				<label className={styles.form__label +" "+ styles.form__block} htmlFor="politic_c">
					<input type="checkbox" className={styles.form__checkbox + [" field_out"]} id="politic_c" name="politica" required onChange={this.handleChange} data-error="false"/>
					{ this.props.text.placeholder_5}
					<span className={styles.form__block__help}>{ this.props.text.error_5}</span>
				</label>
				<button className={styles.form__btn} type="submit">{ this.props.text.btn}</button>
				<div className={styles.form__out}>
					<h2>{ this.props.text.out_h2}</h2>
					<p>{ this.props.text.out_p}</p>
				</div>
			</form>
		);
	}
}

const Sending = (props) => {
		const lang = props.data;
		let text = {};
		let new_text = {};
		text.h1 = [
			"Use the feedback form to communicate:",
			"Связатся с нами"
		];
		text.btn = [
			"send it",
			"отправить"
		];
		text.error_1 =[
			"Enter your Name",
			"Введите ваше имя"
		];
		text.error_2 =[
			"Enter valid email address",
			"Введите правильный email"
		];
		text.error_3 =[
			"Enter your Phone - '+7(777) 7777-77-77'",
			"Введите номер по образцу - '+7(777) 7777-77-77'"
		];
		text.error_4 =[
			"Max length 250 symbols",
			"Максимум 250 симоволов"
		];
		text.error_5 =[
			"Confirm the field",
			"Потвердите это поле"
		];
		text.placeholder_1 =[
			"Your name",
			"Ваше имя"
		];
		text.placeholder_2 =[
			"Your email",
			"Ваш email"
		];
		text.placeholder_3 =[
			"Your phone",
			"Ваш номер телефона"
		];
		text.placeholder_4 =[
			"Message",
			"Сообщение"
		];
		text.placeholder_5 =[
			"I consent to processing of my personal data",
			"Я даю согласие на обработку персональных данных"
		];
		text.out_h2 = [
			"Thanks",
			"Спасибо"
		];
		text.out_p = [
			"We will contact you",
			"Мы с Вами свяжемся"
		];

		if(lang === "ru"){
			new_text.h1 = text.h1[1]
			new_text.btn = text.btn[1]
			new_text.error_1 = text.error_1[1]
			new_text.error_2 = text.error_2[1]
			new_text.error_3 = text.error_3[1]
			new_text.error_4 = text.error_4[1]
			new_text.error_5 = text.error_5[1]
			new_text.placeholder_1 = text.placeholder_1[1]
			new_text.placeholder_2 = text.placeholder_2[1]
			new_text.placeholder_3 = text.placeholder_3[1]
			new_text.placeholder_4 = text.placeholder_4[1]
			new_text.placeholder_5 = text.placeholder_5[1]
			new_text.out_h2 = text.out_h2[1]
			new_text.out_p = text.out_p[1]
		}else{
			new_text.h1 = text.h1[0]
			new_text.btn = text.btn[0]
			new_text.error_1 = text.error_1[0]
			new_text.error_2 = text.error_2[0]
			new_text.error_3 = text.error_3[0]
			new_text.error_4 = text.error_4[0]
			new_text.error_5 = text.error_5[0]
			new_text.placeholder_1 = text.placeholder_1[0]
			new_text.placeholder_2 = text.placeholder_2[0]
			new_text.placeholder_3 = text.placeholder_3[0]
			new_text.placeholder_4 = text.placeholder_4[0]
			new_text.placeholder_5 = text.placeholder_5[0]
			new_text.out_h2 = text.out_h2[0]
			new_text.out_p = text.out_p[0]
		}
  	return (
	    <section className={styles.feedback} id="feedback">
	        <h1 className={styles.feedback__h1}>{new_text.h1}</h1>
	        <Form text={new_text}/>
	    </section>
  	)
};



export default Sending;
