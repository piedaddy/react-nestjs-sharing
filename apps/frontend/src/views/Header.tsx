import { MessageIcon } from '@/icons/message.icon';
import { SettingsIcon } from '@/icons/settings.icon';
import { SignoutIcon } from '@/icons/signout.icon';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

import { ROUTE_PATHNAME } from '@/@types/enumTypes';

export default function Heading() {
  const userFirstName = useAppSelector((state) => state.user.firstName);

  return (
    <div className="flex j-between a-center ml-header h-3em background-color__light-blue">
      <h5>hi, {userFirstName}</h5>

      <div className="flex j-end mr-xl">
        <Link to={`/${ROUTE_PATHNAME.INBOX}`} className="mr-xl">
          <MessageIcon />
        </Link>
        <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
          <SettingsIcon />
        </Link>
      </div>
    </div>
  );
}
