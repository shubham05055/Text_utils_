import React,{useState} from 'react'


export default function Body(props) {
  const[text,settext]=useState("");
  const toUpper=()=>{
    console.log("button clicked");
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  
  const onchange=(event)=>{
    console.log("changed")
    settext(event.target.value)
  }
  
  const toLower=()=>{
    let lowertext=text.toLowerCase();
    settext(lowertext);
  }

  const toclear =()=>{
    settext("");
  }

  return (
    <>
    <div className='container'>
      <h1>Text Utility</h1>
      <textarea name="sorry" value={text} onChange={onchange} cols="120" rows="19"></textarea>
      <div className='buttons'>
      <br/><button className="btn btn-primary" onClick={toUpper}>change to uppercase</button>
      <br/> <button className="btn btn-secondry" onClick={toLower}> change to lowercase</button>`
      <br/> <button className="btn btn-secondry" onClick={toclear}>Clear text</button>
      </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>your word count {text.split(" ").length} and character count {text.length}</p>
    </div>
    <div className="container2">
      <h3>Preview text</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
