import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LOGIN } from '@/apis/auth.apis';

import { ROUTE_PATHNAME } from '@/@types/enumTypes';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '@/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function login() {
    try {
      const { data } = await LOGIN({ email, password });
      //@todo - get user data, save it in store - but do this in apis file
      navigate(`${ROUTE_PATHNAME.USER_PROFILE}`);
    } catch (error) {
      showFailedLoginToast();
    }
  }

  function onEmailChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  }

  function onPasswordChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  }

  const showFailedLoginToast = () => toast('There was a problem logging in');

  return (
    <Layout>
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
            <label htmlFor="password">
              {t('personal_information.password')}
            </label>
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
      <ToastContainer />
    </Layout>
  );
}
