import React, {useState} from "react";

//list of three messages
const messages = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]
//add event listener to next button
// const next_btn = document.querySelector('.next_btn')
// next_btn.addEventListener('click', function(){
//   alert('NEXT BUTTON')
// })

// //add evnet listener to pre button
// const prev_btn = document.querySelector('.prev_btn')
// prev_btn.addEventListener('click', function(){
//   alert('NEXT BUTTON')
// })


function App() {
  //set the state  -example 1
  const [count, setCount] = useState(0)


  //set the state - example 2
  const [counter, setCounter ] = useState(1)

  //set the state for example 3
  const [isOpen, setIsopen] = useState(false)


  //set the state to collect the name - example 4
  //collect multiple data as state
  const [inputdata, setInputdata] = useState({})
  // console.log(name)
  // const [age,setAge] = useState("")

  //this function can collect the change of each input data
  const handledata = function(e){
    const name =e.target.name
    const value = e.target.value
    setInputdata(values => ({...values, [name]:value}))// spread
  }
  //submit function for alert container
  const submitform = function(e){
    e.preventDefault()
    alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nSuggestions: ${inputdata.usercomments}`)

  }
  //add event listener to the button
  // const incrementbtn = document.querySelector('.incrementbtn')
  // incrementbtn.addEventListener('click', function(){
  //   setCount(count + 1)
  // })
  return (
    <>
    <h1 className="title">Exampe 4: forms</h1>
    <section>
      <form className="signupform" onSubmit={submitform}>
        <fieldset>
          <legend>Sign Up Form</legend>
          <div className="formcontrol">
            <label for="name">Enter Name: </label>
            <input 
              id="name" 
              type="text" 
              placeholder="Type Your Name........"
              name="fullname"
              value={inputdata.fullname}
              //to add name automatically
              onChange={handledata}
            />

          </div>
          <div className="formcontrol">
            <label for="age">Enter the Age</label>
            <input
                id="age"
                type="number"
                placeholder="Type your age"
                name="age"
                min={1}
                max={99}
                value={inputdata.age}
                onChange={handledata}
            />
           

          </div>
          
          <div className="formcontrol">
              <label for="selectgender">Select the Gender: </label>
              <select 
                id="selectgender"
                
                value={inputdata.gender}
                name="gender"
                onChange={handledata}

              >
                 <option value="female">Female</option>
                 <option value="male">Male</option>
                 <option value="other">Other</option>

              </select>

            


          </div>
            <div className="formcontrol">
              <label for="comments">Suggestion? </label>
              <textarea 
                id="comments"
                placeholder="Max 1000 Characters"
                maxLength={1000}
                name="usercomments"
                value={inputdata.usercomments}
                onChange={handledata}
              >

              </textarea>

            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </fieldset>
      </form>
    </section>
    <h1 className="title">Example 3: open and close button</h1>
    <section className="intro">
      <b>Cat (Felis Catus)</b>, commonly referred to as the domestic cat or house cat
      <button onClick={function(){setIsopen(!isOpen)}}> {isOpen ? "Hide": "Read More"}</button>


    </section>

    <section>
      { isOpen &&
        (
          <div className="readmore">
                Dogs, often dubbed "man's best friend," hold a unique place in human society. Their unwavering loyalty, playful nature, and unconditional love have captivated hearts for millennia, earning them a cherished spot in countless homes and families. But beyond their cuddly companionship, dogs possess a fascinating history and diverse range of characteristics that continue to amaze and intrigue us.
  
  
          </div>

        )
       

      }
      
    </section>


    <h1 className="title">Example 1</h1>
    <p>The count is = {count}</p>
    <button className="incrementbtn" onClick={function(){setCount(count+1)}}>Increment</button>
    <h1 className="title">Example 2: slice app</h1>
    <section className="slicecontainer">
      <div className="slicewrapper">
        <div className={counter==1 ? "active":""}>1</div>
        <div className={counter==2 ? "active":""}>2</div>
        <div className={counter==3 ? "active":""}>3</div>
        
       

      </div>
      <p className="displaymsg">Display Message { counter } = "{messages[counter-1]}"</p>
      <div className="groupbtn">
        <button className="prev_btn" onClick={function(){if(counter>1) setCounter(counter-1)}}>Previous</button>
        <button className="next_btn" onClick={function(){if(counter<3) setCounter(counter+1)}}>Next</button>

      </div>
    </section>
    {/* //example 3 */}
    
    </>

  );
}

export default App;
