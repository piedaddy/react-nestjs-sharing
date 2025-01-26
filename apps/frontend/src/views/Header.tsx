import { MessageIcon } from '@/icons/message.icon';
import { SettingsIcon } from '@/icons/settings.icon';
import { SignoutIcon } from '@/icons/signout.icon';
import { Link } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';

export default function Heading() {
  return (
    <div className="flex-column background-color__light-blue">
      <div className="flex j-between">
        <h5>hi, gaby</h5>
        <SignoutIcon />
      </div>
      <div className="flex j-between">
        <div className="flex j-between w-50">
          <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
            <p>my items</p>
          </Link>

          <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
            <p>borrowed list</p>
          </Link>

          <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
            <p>check neighborhood</p>
          </Link>
        </div>
        <div className="flex j-between w-10 mr-xl">
          <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
            <MessageIcon />
          </Link>
          <Link to={`/${ROUTE_PATHNAME.USER_PROFILE}`}>
            <SettingsIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
