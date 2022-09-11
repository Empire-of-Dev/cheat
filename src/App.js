import './App.css';
import React,{useState,useRef} from 'react'
import {exportComponentAsPNG } from 'react-component-export-image';
function App() {

  const [signupForm, setSignupForm] = useState({
    time: "",
    num: "",
    sendname: "",
    sendnum: "",
    recivename: "",
    recivemum: "",  
    money: ""
   
  });

  function handleChange(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });    
    console.log(signupForm)
   
  }

  const ComponentToPrint = React.forwardRef((props, ref) => (   
    <div  ref={ref} className='frame'>
    <div className='header'>
      <p>{signupForm["time"]}</p>            
    </div>     
    <div className='header'>
      <div> <p1>{signupForm["num"]}</p1>  </div>
    </div>      

   

    <div className='send'>
      <div className='send-name'> 
        <div>
          <img className='logo' src='/logo.png'/>
          <div><p1>{signupForm["sendname"]}</p1> </div>
        </div>             
    </div>
    <div className='send-num' >               
          <p3>{signupForm["sendnum"]}</p3> 
     </div>
    </div>      


    <div className='recive'>
      <div className='recive-name'>  
        <div>
          <img className='logo' src='/recive.png'/>
          <div><p1>{signupForm["recivename"]}</p1></div>
        </div>
     </div>
     <div className='recive-num' >  
                  
          <p3>{signupForm["recivemum"]}</p3> 
     </div>
    </div>      

    <div className='money'>            
     <div className='recive-money' > 
        <p3>{signupForm["money"]}</p3> 
     </div>
    </div>      


    <img src="/bg.png" alt="image" />

    
  </div> 
  ));
  const componentRef = useRef();

  return (
    <div className="container">
      <div className='input'>
        <div className='box'>
          <li>
            <label >เวลา</label>
            <input name='time' type="text" onChange={handleChange}/>
          </li>
          <li>
            <label >รหัสอ้างอิง</label>
            <input name='num' type="text" onChange={handleChange}/>
          </li>
          <li>
            <label >ชื่อบัญชีที่โอน</label>
            <input name='sendname' type="text" onChange={handleChange}/>
          </li>
          <li>
            <label >เลขบัญชี</label>
            <input name='sendnum' type="text"onChange={handleChange} />
          </li>
          <li>
            <label >ชื่อบัญชีรับเงิน</label>
            <input name='recivename' type="text" onChange={handleChange} />
          </li>
          <li>
            <label >เลขบัญชี</label>
            <input name='recivemum' type="text" onChange={handleChange}/>
          </li>
          <li>
            <label >จำนวนเงิน</label>
            <input name='money' type="text" onChange={handleChange}/>
          </li>
        </div>       
    </div>

    <div className='output'>
      <ComponentToPrint ref={componentRef} />
    </div>
      
      
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </div>

    
  );
}

export default App;
