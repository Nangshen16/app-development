import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import About from './components/aboutme';
import Contact from './components/contact';
import './index.css';
import App from './App';
import User from './comments';
import zero from './images/zero.avif'

import one from './images/one.jpeg'
import two from './images/two.jpeg'
import three from './images/3.avif'
import four from './images/4.avif'
import five from './images/five.avif'
import six from './images/six.avif'
import seven from './images/7.jpeg'
import eight from './images/8.avif'
import nine from './images/9.avif'
import ten from './images/ten.avif'


//create content in the app using function component
const App1 = function(){
    //create variable outside of the return
    //define variable name
    let fullname = "Nang Shen Hom";
    //declare function outside of the return
    function greeting(){
        return "Good evening"
    }
    return(
        <div>
            <h1>Welcome to {fullname} Children Education App</h1>
            <section className='cardcontainer'>
                <User image={zero} name="Zero" comments="Number zero is Ton Nya"/>

                <User image={one} name="One" comments="Number one is Tic"/>
                <User image={two} name="Two" comments="Number two is Nit"/>
                <User image={three} name="Three" comments="Number three is Tone"/>
                <User image={four} name="Four" comments="Number four is Lay"/>
                <User image={five} name="Five" comments="Number five is Ngar"/>
                <User image={six} name="Six" comments="Number six is chaut"/>
                <User image={seven} name="Seven" comments="Number Seven is Kun"/>
                <User image={eight} name="Eight" comments="Number Eight is Shitt"/>
                <User image={nine} name="Nine" comments="Number Nine is Koe"/>
                <User image={ten} name="Ten" comments="Number ten is TaSay"/>





            
            </section>
        </div>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
