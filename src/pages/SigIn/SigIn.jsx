import { useEffect, useState } from 'react';
import Validation from './Validation';
import './SigIn.scss';
import {Link} from 'react-router-dom';
function SigIn({submitForm}) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',

    })

    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [errors, setErrors] = useState({});

    const handleOnchange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        // setErrors(Validation(values))
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true)
        }
    },[errors])
    
    return (  
        <div className="sig-in">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Your name</label>
                <input 
                    type="text" id='name' 
                    name ='name' 
                    placeholder='Enter your name'
                    onChange={handleOnchange} 
                />
                {errors.name && <p className='error'>{errors.name}</p>}
                <div 
                    className='error err-name'
                ></div>
                <label>Email address</label>
                <input 
                    type="email" 
                    id='email' name ='email' 
                    placeholder='Enter your email' 
                    onChange={handleOnchange} 

                />
                {errors.email && <p className='error'>{errors.email}</p>}
                <label>Password</label>
                <input 
                    type="text" id='password' 
                    name ='password'
                    placeholder='Enter your password' 
                    onChange={handleOnchange} 

                />
                {errors.password && <p className='error'>{errors.password}</p>}

                <button  type='submit'>Sign In</button>

                <Link to='/signup'>create an account</Link>
            </form>
        </div>
    );
}

export default SigIn;