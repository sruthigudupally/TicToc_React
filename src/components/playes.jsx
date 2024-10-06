// import React,{useState} from 'react'

// const Playes = () => {
    
//     let [state,setstate]=useState("")
//     let [player,setplayer]=useState(null)
    
//     let [state1,setstate1]=useState("")
//     let [state2,setstate2]=useState("")
//     let [state3,setstate3]=useState("")
//     let [state4,setstate4]=useState("")
//     let [state5,setstate5]=useState("")
//     let [state6,setstate6]=useState("")
//     let [state7,setstate7]=useState("")
//     let [state8,setstate8]=useState("")
//     function change1(){
//         setstate("x")
//     }
//     function change2(){
//         setstate1("0")
//     }
//     function change3(){
//         setstate2("x")
//     }
//     function change4(){
//         setstate3("0")
//     }
//     function change5(){
//         setstate4("x")
//     }
//     function change6(){
//         setstate5("0")
//     }
//     function change7(){
//         setstate6("x")
//     }
//     function change8(){
//         setstate7("0")
//     }
//     function change9(){
//         setstate8("x")
//     }

//     function change11(){
//         setstate("0")
//     }
//     function change22(){
//         setstate1("x")
//     }
//     function change33(){
//         setstate2("0")
//     }
//     function change44(){
//         setstate3("x")
//     }
//     function change55(){
//         setstate4("0")
//     }
//     function change66(){
//         setstate5("x")
//     }
//     function change77(){
//         setstate6("0")
//     }
//     function change88(){
//         setstate7("x")
//     }
//     function change99(){
//         setstate8("0")
//     }
//     function geting(){
//     let a=document.getElementById("but1").value;
//     let b=document.getElementById("but2").value;
//     let c=document.getElementById("but3").value;
//     let d=document.getElementById("but1").value;
//     let e=document.getElementById("but2").value;
//     let f=document.getElementById("but3").value;
//     let g=document.getElementById("but1").value;
//     let h=document.getElementById("but2").value;
//     let i=document.getElementById("but3").value;
//     if(a===b===c==='0' || a===d===g==='0' || a===e===i==='0' ||c===e===g==='0' || c===f===i==='0' ||g===h===i==='0' ){
//         setplayer('0');
        
//     }
//     else{
//         setplayer("x")
//     }
        

//     }
    


//   return (
//     <>
//     <div>
//         <table border={1}>
//             <tbody>
//             <tr>
//                 <th><button onClick={change1} onDoubleClick={change11}  id="but1">{state}</button></th>
//                 <th><button onClick={change2} onDoubleClick={change22} id="but2">{state1}</button>
              
//                </th>
//                 <th> <button  onClick={change3} onDoubleClick={change33} id="but3">{state2}</button></th>
//             </tr>
//             <tr>
//                 <th><button onClick={change4} onDoubleClick={change44}  id="but4">{state3}</button></th>
//                 <th><button onClick={change5} onDoubleClick={change55}  id="but5">{state4}</button>
              
//                </th>
//                 <th> <button  onClick={change6} onDoubleClick={change66}  id="but6">{state5}</button></th>
//             </tr>
//             <tr>
//                 <th><button onClick={change7} onDoubleClick={change77}  id="but7">{state6}</button></th>
//                 <th><button onClick={change8} onDoubleClick={change88}  id="but8">{state7}</button></th>
//                 <th> <button  onClick={change9} onDoubleClick={change99}  id="but9">{state8}</button></th>
//             </tr>
//             </tbody>

//         </table>
//         <button onClick={geting} >the winner is:{player}</button>
        
       
//       <br />  
      
      
//     </div>

//    </>
//   )

// }


// export default Playes;
