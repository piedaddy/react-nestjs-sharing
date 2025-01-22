import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { t } = useTranslation();

  function signUp() {
    console.log('sign up!', email, password, firstName, lastName);
  }

  function onEmailChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  }

  function onPasswordChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  }

  function onFirstNameChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setFirstName(target.value);
  }

  function onLastNameChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setLastName(target.value);
  }

  return (
    <div className="flex-column a-center h-100 background-color__light-blue">
      <h2 className="tc-sb mt-xl uppercase">{t('sign_up.sign_up')}</h2>
      <div className="login_box login_box__sign_up mb-xxl">
        <div className="input_box">
          <label htmlFor="firstName">
            {t('personal_information.first_name')}
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={onFirstNameChange}
          ></input>
        </div>

        <div className="input_box">
          <label htmlFor="lastName">
            {t('personal_information.last_name')}
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={onLastNameChange}
          ></input>
        </div>
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
            {' '}
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

        <button onClick={signUp}>{t('sign_up.sign_up_button')}</button>
      </div>
      <button>
        <Link to={ROUTE_PATHNAME.LANDING} className="nav_link_text">
          {t('button.back_to_main')}
        </Link>
      </button>
    </div>
  );
}
