import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import HackTimer from 'hacktimer';
import Header from './header/Header';
import Footer from './footer/Footer';
import Socials from './main/socials/Socials';
import Partners from './main/partners/Partners';
import Sending from './main/sending__form/Sending';
// import { YMInitializer } from './react-yandex-metrika/';

// const param_ya = {
// 	id:45878940,
// 	clickmap:true,
// 	trackLinks:true,
// 	accurateTrackBounce:true,
// 	webvisor:true,
// 	trackHash:true
// }
// // param_ya.id


const Home = (props) => (
	<div>
			{/* {console.log(props)} */}
		<Header {...props} data={props.data} />
		<main>
			<Socials {...props} data={props.data} />
			<Partners />
			<Sending {...props} data={props.data} />
		</main> 
		<Footer {...props} data={props.data} />
		{/* <YMInitializer accounts={[45878940]}  options={param_ya} /> */}
		{/* <HackTimer /> */}
	</div>
);

// ReactDOM.render( <Home/>, document.getElementById("root") );

ReactDOM.render(
 		<Router>
			<Switch>
				{/* <Route exact path="/"   component={Test} /> */}
				{/* <Route path="/ru/" component={Test1}/> */}
				<Route exact path='/' render={(props) => (
				  <Home {...props} data={"en"}/>
				)}/>
				<Route exact path='/ru' render={(props) => (
				  <Home {...props} data={"ru"}/>
				)}/>
				{/* <Route path='/ru' render={(props) => (
				  <Home {...props} data={"test"}/>
				)}/> */}
			</Switch>
		</Router>,
	document.getElementById("root")
);




HackTimer;
registerServiceWorker();
// HackTimer();
