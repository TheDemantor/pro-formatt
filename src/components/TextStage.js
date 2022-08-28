import React, {useState} from 'react'

export default function TextStage(props) {  
  const handleUpClick=()=>{
    let newText=text.toUpperCase(); 
    setText(newText)
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase(); 
    setText(newText)
  }
  const handleRemoveSpaces=()=>{
    let newText=text.trim(); 
    setText(newText)
  }
  const clearBox=()=>{
    setText("")
    props.showAlert("Text stage Cleared!!!", "success")
  }
  const handleOnChange= (event)=>{
    setText(event.target.value)
  }
  const[text,setText]=useState("")
  return (
    <>
    <form className='container my-2 ' >
        <h1>{props.heading} </h1>
        <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} style={{backgroundColor: props.mode==='light'?'white':'	#36454F', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange}></textarea>
        </div>

        <button onClick={handleUpClick} type="button" className="btn btn-dark my-3 mx-3">Change to upper case</button>
        <button onClick={handleLoClick} type="button" className="btn btn-dark my-3 mx-3">Change to lower case</button>
        <button onClick={handleRemoveSpaces} type="button" className="btn btn-dark my-3 mx-3">Remove extra space</button>
        <button onClick={clearBox} type="button" className="btn btn-dark my-3 mx-3">Clear</button>
        {/* <button onClick={} type="button" className="btn btn-dark my-3 mx-3">Remove extra space</button>   */}
    </form>
    <div className="summary container my-5 ">
      <h1>Text Stats</h1>
      <p>Words= {text.split(" ").length-1} <br />Characters= {text.length} </p>
      <p>Time to read= {0.008*text.split(" ").length-0.008}</p>
    </div>
</>
  )
}
