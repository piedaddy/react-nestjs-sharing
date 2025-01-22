import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  function login() {
    console.log('logging in!', email, password);
    navigate(`${ROUTE_PATHNAME.USER_PROFILE}`);
  }

  function onEmailChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  }

  function onPasswordChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  }

  return (
    <div className="login">
      <h2 className="tc-db as-start mt-xxl">Login</h2>
      {/* <div className="login_box flex-column j-center a-center"> */}
      <div className="login_box login_box__landing">
        <div className="input_box">
          <label htmlFor="email">{t('personal_information.email')}</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          ></input>
        </div>

        <div className="input_box">
          <label htmlFor="password">{t('personal_information.password')}</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
          ></input>
        </div>

        <button onClick={login}>{t('button.login')}</button>
      </div>
      <div>
        <p className="tc-gr">
          {t('sign_up.no_account')}
          <Link to={'sign-up'} className="login__sign_up_link">
            {t('sign_up.here')}
          </Link>
        </p>
      </div>
    </div>
  );
}
