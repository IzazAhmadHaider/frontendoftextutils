import axios from 'axios'
import './App.css'
import './cmpnts/NavBar'
import NavBar from './cmpnts/NavBar'

import { useEffect, useState } from 'react'

function App() {

  const [text, setText] = useState(''); 
  
  const handleUpClick = ()=>{


    // let newText = text.toUpperCase();
    // setText(newText)
    axios.get(`http://localhost:3000/upcase/?data=${text}`).then(res=> setText(res.data))
}
const handleOnChange = (event)=>{
  setText(event.target.value) 
}
const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
}
const handleLoClick = ()=>{ 
  // let newText = text.toLowerCase();
  // setText(newText)
  axios.get(`http://localhost:3000/locase/?daata=${text}`).then(res=> setText(res.data))

}
const handleCopy = () => {
  navigator.clipboard.writeText(text);
}
const handleExtraSpaces = () => {
  let newText = text.split(/\s+/);
  setText(newText.join(" "));
}



// useEffect(()=>{
//   axios.get('http://192.168.1.141:3000/getdata/?minAge=20&maxAge=27').then(res=> {
//     const data = res.data;
//     let str = '';
//     data.forEach((item, i)=>{
//       const s = 'Person '+i + ' deatils= name: '+item.name + ' and his age: ' + item.age +'\n' 
//       str = str + s;
//     })

//     setText(str)

//   })
// }, [])



  return (
    <>
    <NavBar/>
    <p className='Text-Analyzer'>Welcome to Text-Analyzer</p>
    <div className='textdiv'>
    <textarea className="texthere" value={text} onChange={handleOnChange} id="textthere" cols="100" rows="15"></textarea>
    <div>
    <button class="styled-button" onClick={handleUpClick}>Convert to Upper case</button>
    <button class="styled-button" onClick={handleLoClick}>Convert to lower case</button>
    <button class="styled-button" onClick={handleCopy}>Copy Text</button>
    <button class="styled-button" onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button class="styled-button" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </div>
    </>
  )
}

export default App
