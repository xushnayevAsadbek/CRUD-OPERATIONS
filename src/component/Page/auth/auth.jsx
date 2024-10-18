import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGIN from '../../service/auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './auth.css';
import { Loader } from '../../loader';
export const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const redirect = useNavigate();
  const userLogin = async (e) => {
    e.preventDefault();
    setLoad(true);

    const userData = {
      username: username,
      password: password
    };

    if (userData.username.length === 0 || userData.password.length === 0) {
      alert('Please enter a username and password');
      setLoad(false);
    } else {
      try {
        const res = await LOGIN.auth(userData);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          toast.success('Admin panelga  muvafaqatli kirdingiz', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            setLoad(false);
            redirect("/addstudent");
          }, 1000); 
        }
      } catch (error) {
        setLoad(false);
        toast.error('Username yoki Password xato', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error(error);
      }
    }
  };

  return (
    <div className='container' style={{ backgroundColor: '#E5E5E5' }}>
      {load && <Loader />}
      <div className='auth--card'>
        <div>
          <div className='auth--heading--box'>
            <h2 className='auth__heading'>CRUD OPERATIONS</h2>
          </div>
          <p className='auth__text'>Sign In</p>
          <p className='auth__text1'>Enter your credentials to access your account</p>
        </div>
        <div className='auth--box'>
          <form>
            <div className='auth--box__email'>
              <label className='auth--box__eamil-label'>
                UserName(mor_2314) <br />
                <input className='auth--box__eamil-input'
                  type="text"
                  name="username"
                  id='username'
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </label>
            </div>
            <div className='auth--box__password'>
              <label className='auth--box__password-label'>
                Password(83r5^_)
                <br />
                <input className='auth--box__password-input'
                  type="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </label>
            </div>
            <div>
              <button type="submit" className='auth--box__btn' onClick={(e) =>userLogin(e)}>SIGN IN</button>
            </div>
          </form>
          <p className='auth--box__text'>
            Forgot your password? <span className='span'>Reset Password</span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

