import {React,useRef } from 'react'
import { useDispatch} from 'react-redux'

export default function Controls() {
   const dispatch=useDispatch();
   const inputElement= useRef()

   const handleIncrement=()=>{
    dispatch({
        type:"INCREMENT",
      
    })
   }

   const handledecrement=()=>{
    dispatch({
        type:"DECREMENT",
        
    })

   }
   const handleAdd=()=>{
    dispatch({
        type:"ADDITION",
        payload:{num:inputElement.current.value}
        
    })
    inputElement.current.value="";

   }

   const handleSub=()=>{
    dispatch({
        type:"SUBTRACTION",
        payload:{num:inputElement.current.value}
        
    })
    inputElement.current.value="";
   }

   const HandleprivacyToggle=()=>{
    dispatch({
        type:"PRIVACY_TOGGLE",
       
    })

   }

  return (
    <>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
              <button type="button" className="btn btn-primary px-4 gap-3 btn-sm" onClick={handleIncrement}>+1</button>
              <button type="button" className="btn btn-outline-success  px-4 btn-sm " onClick={handledecrement}>-1</button>
            
              <button type="button" className="btn btn-outline-warning  px-4 btn-sm " onClick={HandleprivacyToggle}>Privacy toogle</button>
            
            </div>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
                         <input type="text" placeholder='Enter number' ref={inputElement} />
                         <button type="button" className="btn btn-outline-info  px-4 btn-sm" onClick={handleAdd}>Add</button>
                         <button type="button" className="btn btn-outline-danger  px-4 btn-sm" onClick={handleSub}>Subtract</button>
            </div>
   
      
    </>
  )
}
