import React from 'react';
// import './login.scss';

// strapi function
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
//handle user
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';

export default function Login() {
  const history = useHistory();
  // setup user context
  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  // state values
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    showAlert({
      msg: "loading..."
    });
    // alert
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }

    if (response) {
      // console.log('success');
      // console.log("handleSubmit -> response", response)
      const {
        jwt: token,
        user: { username },
      } = response.data;
      // create new user object
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({
        msg: `du er nu logget ind: ${username}.`,
      });
      history.push('/products');
    } else {
      showAlert({
        msg: "har du lavet en tastefejl? prøv venligst igen...",
        type: "danger"
      });
    }
  };

  return (
    <section className='form section'>
      <h2 className='section-title'>{isMember ? 'login' : 'registrer'}</h2>
      <div className="underline"></div>
      <form className='login-form'>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='email'>email:</label>
          <input
            type='email'
            id='email'
            placeholder='john@doe.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='password'>adgangskode:</label>
          <input
            type='password'
            id='password'
            placeholder='••••••••••••'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>brugernavn</label>
            <input
              type='text'
              id='username'
              placeholder='John Doe'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className='form-empty'>udfyld alle felter</p>
        )}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type='submit'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            send
          </button>
        )}
        {/* register link */}
        <p className='register-link'>
          {isMember ? 'opret konto' : 'allerede medlem'}
          <button type='button' onClick={toggleMember}>
            klik her
          </button>
        </p>
      </form>
    </section>
  );
}
