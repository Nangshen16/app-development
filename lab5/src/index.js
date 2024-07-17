import React from 'react';//important
import ReactDOM from 'react-dom/client';//important//ReactDom is object
import './index.css';
// import App from './App';
import parrot from './images/maui.jpg';
import User from './comments';
import girl_avatar from './images/girl_avatar.png';
import boyavatar from './images/boyavatar.png';
import hacker from './images/hacker.png';



//create content in the app using function component
//first step
const App = function(){
  //create variable outside of the return
  //define a variable name
  let fullname = "Nang Shen Hom";
  //declare function outside of return
  function greeting(){
    return "Good Evening!"
  }
  return(
    // <div>Welcome to React JS</div> //jsx html script inside of js 
    <div>
      <h1 style={{textAlign:"center", color:"red"}}>Welcom To {fullname} React JS</h1>
      <p>{greeting()} Let's be familiar with JSX elements which is html syntax allowed them to write in js file! by {fullname}</p>
      <figure className="introimg">
        <img  src={parrot}/>
      </figure>

      {/* card  */}
      <section className='cardcontainer'>
        <User image={girl_avatar } name='Rachel' date='07/16/2024' comments="Ohlala"/>
        <User image={boyavatar} name="Sean" date='07/16/2024'comments="Serious"/>
        <User image={hacker } name="Hazel" date='07/16/2024'comments="React JS"/>
        <User image={girl_avatar } name="Quincy" date='07/16/2024' comments="Matcha"/>
        <User image={girl_avatar } name="Tokyo" date='07/16/2024'comments="Hojicha"/>
        <User image={girl_avatar } name="Kyoto" date='07/16/2024' comments="Soba Ya"/>

      </section>
    </div>
  )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(App())


