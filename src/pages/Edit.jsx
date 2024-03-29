/* eslint-disable react/prop-types */
import { BiSolidUser } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from "react-router-dom";

function FormInput({label, type, name, inputs, handleChange, bio=false}) {
  return (
    <>
      <div className='w-full px-5 translate-y-3'>
        <label className='bg-label-blue px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-full font-bold'>{label}</label>
      </div>
      {
        (bio === false) ? 
        <input required type={type} name={name} defaultValue={inputs[name] || ""} onChange={handleChange} className={`w-full h-16 px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`} /> : 
        (<textarea required type={type} name={name} defaultValue={inputs[name] || ""} onChange={handleChange} className={`w-full h-48 px-[0.5rem] py-[1rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`}></textarea>)
      }
    </>
  )
}

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }
  return (
    <form onSubmit={handleSubmit} className="translate-y-16 flex flex-col items-center w-[90vw] sm:max-w-xl border-4 border-black px-4 pt-4 pb-2 rounded-2xl bg-gradient-to-r from-card-grad-l to-card-grad-r "> 
      <img alt="profile pic" src="./assets/avatar (1).png" className='absolute -translate-y-20 mt-2 w-28 h-28 border-4 border-black rounded-full'/>
      <div className='w-full flex flex-col items-center mt-14'>
        <FormInput label="Your Name" type="text" name="username" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Instagram" type="text" name="instagram" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Twitter" type="text" name="twitter" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Bio" type="text" name="bio" inputs={inputs} handleChange={handleChange} bio={true}/>
      </div>
      <div className='flex flex-col items-center translate-y-14'>
        <input type="submit" value="Save" className=' bg-button-green hover:bg-button-green-dark px-[1rem] py-[0.5rem] border-4 border-black rounded-full font-bold text-lg'/>
        <Link to="/profile" className=''> SKIP </Link>
      </div>
    </form>
  )
}

function Edit() {
    return (
      <div className='flex flex-col items-center mb-40'>
        <h1 className='text-4xl pt-4 pb-2 font-["League_Spartan"]'>ListenSphere</h1>
        <BiSolidUser className='text-nav-yellow bg-black p-2 rounded-full text-4xl'/>
        <Form/>
      </div>
    )
}
  
export default Edit;