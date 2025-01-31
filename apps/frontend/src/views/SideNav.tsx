import { Link } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';
import { SignoutIcon } from '@/icons/signout.icon';

export default function SideNav() {
  return (
    <div className="side-nav flex-column j-between">
      <div className="flex-column">
        <h2 className="tc-db mb-xxl">YAYBORHOOD</h2>
        <div className="flex-column j-between h-20">
          <Link to={`/${ROUTE_PATHNAME.ITEMS}`}>
            <p>my items</p>
          </Link>

          <Link to={`/${ROUTE_PATHNAME.ITEMS}`}>
            <p>borrowed list</p>
          </Link>

          <Link to={`/${ROUTE_PATHNAME.SEARCH}`}>
            <p>check neighborhood</p>
          </Link>
        </div>
      </div>

      <Link to={`${ROUTE_PATHNAME.LANDING}`}>
        <SignoutIcon />
      </Link>
    </div>
  );
}
