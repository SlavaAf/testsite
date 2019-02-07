import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Socials from './main/socials/Socials';
import Partners from './main/partners/Partners';
import Sending from './main/sending__form/Sending';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<div>
  		<Header />
  		<main>
  			<Socials />
  			<Partners />
  			<Sending />
  		</main>
  		<Footer />
  	</div>,
    div);
});
