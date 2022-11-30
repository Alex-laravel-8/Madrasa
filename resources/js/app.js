import React from 'react';
 import ReactDOM from 'react-dom';
 import { PropTypes } from "prop-types";
import './index.scss';
// import reportWebVitals from './reportWebVitals';
import Cards from '../../resources/js/Components/Cards/Cards.jsx';
import Contact from '../../resources/js/Components/Contact_us/Contact.jsx';
import Footer from '../../resources/js/Components/Footer/Footer.jsx';
import Images from '../../resources/js/Components/ImagesContainer/Images.jsx';
import MainSlider from '../../resources/js/Components/Slider/MainSlider.jsx';
import Navbar from '../../resources/js/Components/Navbar/Navbar.jsx';
import Subscribe from '../../resources/js/Components/Subscribe/Subscribe.jsx';

require('./bootstrap');

function App() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Images />
      <Subscribe />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}
  export default App;
  if (document.getElementById('app')) {
    ReactDOM.render(
    <React.StrictMode>
       <App />
     </React.StrictMode>, document.getElementById('app'));
}
