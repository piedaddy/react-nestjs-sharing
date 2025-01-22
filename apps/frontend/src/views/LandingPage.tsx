import Login from '@/views/Login';
import landing_photo from '@/assets/landing_photo.jpg';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="landing_page">
      <div className="landing_page__login">
        <div className="flex-column a-center mg-lg">
          <h1 className="tc-db ta-center mb-none">
            {t('landing_page.welcome')}
            <span className="italic">{t('landing_page.yayborhood')}</span>
          </h1>
          <h2 className="tc-db italic fw-200">
            {t('landing_page.sharing_caring')}
          </h2>
        </div>
        <Login />
      </div>

      <div className="landing_page__side">
        <img src={landing_photo} alt="" width="100%" height="100%"></img>
      </div>
    </div>
  );
}
