import React, {useContext, useRef, useState} from "react";
import {UserContext} from "../../../Context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const {toggleModals, modalState, signUp} = useContext(UserContext);

  const navigate = useNavigate()

  const [validation, setValidation] = useState("");
 
   const inputs = useRef([])
   const addInputs = el => {
    if (el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
   }
   const formRef = useRef();

   const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value)
    {
      setValidation("Password do not match !")
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )

      formRef.current.reset();
      setValidation("")
      // console.log(cred);
      toggleModals("close")
      navigate("/private/private-home")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }

      if(err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }

    }
    
   }
   const closeModal =() => {
    setValidation("")
    toggleModals("close")
  }


  return (
    <>
    {modalState.signUpModal && (
      <div className="position-fixed top-0 vh-100 vw-100">
        <div 
        onClick={closeModal}
        className="w-100 h-100 bg-dark bg-opacity-75">
          </div>
          <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "200px"}}>
            <div className="modal-dialog" style={{backgroundColor:"white", borderRadius:"5px"}}>
              <div className="modal-content"  >
                <div className="modal-header" style={{padding:"0 10px", marginBottom:"10px"}}>
                    <h5 className="modal-title">Sign Up</h5>
                    <button 
                    onClick={closeModal}
                    className="btn-close"></button>
                </div>

                <div className="modal-body">

                  <form 
                  ref = {formRef}
                  onSubmit={handleForm}
                  className="sign-up-form">
                    <div style={{marginBottom:"10px"}}>
                      <label htmlFor="signUpEmail" style={{display:"flex", paddingLeft:"10px"}}>Email adress</label>
                      <input
                      ref={addInputs}
                       name="email" type="email" 
                      required
                      className="form-control" style={{width:"250px", margin:"0 10px", padding:"0px"}}
                      id="signUpEmail"
                      />  
                    </div>

                    <div style={{marginBottom:"10px"}}>
                      <label htmlFor="signUpPwd" style={{display:"flex", paddingLeft:"10px"}}>Password</label>
                      <input
                      ref={addInputs}
                       name="pwd" type="password" 
                      required
                      className="form-control" style={{  width:"250px", margin:"0px 10px", padding:"0px"}}
                      id="signUpPwd"
                      />  
                    </div>

                    <div style={{marginBottom:"10px"}}>
                      <label htmlFor="repeatPwd" style={{display:"flex", paddingLeft:"10px"}}>repeat Password</label>
                      <input 
                      ref={addInputs}
                      name="pwd" type="password" 
                      required
                      className="form-control" style={{width:"250px", margin:"0 10px", padding:"0px"}}
                      id="repeatPwd"
                      />  
                      <p className="text-danger mt-2" style={{display:"flex", paddingLeft:"10px"}}>
                        {validation}
                      </p>
                    </div>

                    <button className="btn" style={{ display:"flex", border:"1px solid blue", backgroundColor:"blue",
                  color:"white", margin:"10px", padding:"2px 4px"}}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      ) }
    </>
  );
}
