import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const SITE_KEY="6LfYuDArAAAAAGMMY7LGlMpo7SzzVfrjqYVLgF0C"

    const navigate = useNavigate();
    // const uniqId = useId();



    const [formData,setFormData] = useState({
        email:'',
        password:'',
        reCaptchaVerified : false
    })

    const handleChange  =(e)=>
    {
        setFormData({
            ...formData,[e.target.name] : e.target.value
        })
    }
    const handleRecaptchaChange=(value)=>{
        console.log(value)
        // const isVerified=value ? true : false;
        const isVerified = !! value;
        setFormData({
            ...formData,
            reCaptchaVerified:isVerified
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(formData.email != 'admin@gmail.com')return;
        if(formData.password!='admin123')return;
        if(!formData.reCaptchaVerified)return;

        // alert('Login Successfully')

        navigate('/dashboard');
    }





  return (
    <div className='flex justify-center h-screen w-screen bg-slate-400 '>
        <form action=" " onSubmit={handleSubmit} className=' h-130 mt-20 w-90 p-4 rounded-2xl bg-white'>
            <h1 className="text-4xl font-serif text center py-10">Login Form</h1>
            <div className="py-2 flex flex-col">
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="email" id="email"  className='border-2 border-gray-300 rounded-lg p-2 text-2xl' onChange={handleChange} value={formData.email} />
            </div>
            <div className="py-5 flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"  className='border-2 border-gray-300 rounded-lg p-2 text-2xl' onChange={handleChange} value={formData.password}/>

            </div>
            <div className="mb-4">
                <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange}/>
            </div>
            <div className="flex justify-center items-center">
                <button type="submit" className='bg-blue-400 text-2xl hover:bg-blue-600 p-2 rounded-lg cursor-pointer'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login