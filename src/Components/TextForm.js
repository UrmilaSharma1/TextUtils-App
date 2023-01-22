import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text Here");
    const toUC =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success",": Converted to Uppercase!")
    }
    const toLC =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success",": Converted to Lowercase!")        
    }
    const toClear =()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("success",": Text Cleared!")        
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("success",": Text Copied to Clipboard!")        
    }
    const handleExtraSpaces=()=>{
        let newText = text.trim().split(/ +/).join(' ');
        setText(newText)
        props.showAlert("success",": Extra Spaces Removed!")         
    }
      
    const onChangeUC = (event)=>{
        setText(event.target.value)
    }

// text="ffwrtgwrtg" //wrong way to set text
// setText("new text"); //correct way to set text
  return (
    <>
    <div className='container'>
        <div className=" mb-3" >
            <h1>{props.heading}</h1>
            <textarea style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={onChangeUC} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-1" onClick={toUC}>Conver to Uppercase</button>
        <button type="button" className="btn btn-primary my-1 mx-2" onClick={toLC}>Conver to Lowercase</button>
        <button type="button" className="btn btn-primary my-1 mx-2" onClick={toClear}>Clear Text</button>
        <button type="button" className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{.008 * text.split(" ").length} minutes reading </p>
    </div>
    </>
  )
}

