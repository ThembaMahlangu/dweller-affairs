import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import { HeaderContainer, FooterContainer } from '../containers';
import Spinner from '../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    gender:'',
    email: '',
    password: '',
    confirmation:''
  })

  const {name, gender, email, password, confirmation} = formData;


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user ) {
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== confirmation) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        gender,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }
  return (
    <>
      <HeaderContainer />
      <div className='container'>
        <section className='heading'>
          <h1>
            <FaUser /> Register
          </h1>
          <p>Please create an account</p>
        </section>

        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input
              type='text' 
              className='form-control' 
              id='name' 
              name='name' 
              value={name} 
              placeholder='Enter your full name' 
              onChange={onChange} 
            />
            </div>
            <div className='form-group'>
            <input
              type='gender' 
              className='form-control' 
              id='gender' 
              name='gender' 
              value={gender} 
              placeholder='Please type in your gender' 
              onChange={onChange} 
            />
            </div>
            <div className='form-group'>
            <input
              type='email' 
              className='form-control' 
              id='email' 
              name='email' 
              value={email} 
              placeholder='Enter your email' 
              onChange={onChange} 
            />
            </div>
            <div className='form-group'>
            <input
              type='password' 
              className='form-control' 
              id='password' 
              name='password' 
              value={password} 
              placeholder='Enter password' 
              onChange={onChange} 
            />
            </div>
            <div className='form-group'>
            <input
              type='password' 
              className='form-control' 
              id='confirmation' 
              name='confirmation' 
              value={confirmation} 
              placeholder='Confirm password' 
              onChange={onChange} 
            />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-block'>
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
      <FooterContainer />
    </>
  )
}

export default Register;