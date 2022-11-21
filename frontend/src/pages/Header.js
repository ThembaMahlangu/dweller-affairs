import { FaSignInAlt, FaSignOutAlt, FaUser, FaRegQuestionCircle, FaRegBuilding, FaRegCommentDots, FaLandmark } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <ul>
        <li>
          <Link to='/howitworks'>
            <FaRegQuestionCircle /> How it Works
          </Link>
        </li>
        <li>
          <Link to='/accomodation'>
            <FaRegBuilding /> Accomodation
          </Link>
        </li>
        <li>
          <Link to='/feedback'>
            <FaRegCommentDots /> Feedback
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <FaLandmark /> About Us
          </Link>
        </li>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header