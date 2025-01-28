import { useState, useRef, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/features/user/userSlice';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';

import gaby from '../../public/L1007983.jpeg';
import Layout from '@/Layout';
import { UPDATE } from '@/apis/users.apis';
import { GET_ITEMS_BY_USER_ID } from '@/apis/items.apis';

export default function UserProfile() {
  const user = useAppSelector((state) => state.user);
  const userEmail = useAppSelector((state) => state.user.email);
  const userFirstName = useAppSelector((state) => state.user.firstName);
  const userLastName = useAppSelector((state) => state.user.lastName);

  //const initialFirstName = useSelector((state) => state);

  const [email, setEmail] = useState(userEmail);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [location, setLocation] = useState('Praha 2');
  const [isEditMode, setIsEditMode] = useState(false);
  const [userPhoto, setUserPhoto] = useState(gaby);

  const uploadPhotoInput = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [displayName] = useMemo(() => {
    return [`${userFirstName} ${userLastName}`];
  }, [userFirstName, userLastName]);

  // const displayName = `${userFirstName} ${userLastName}`;

  const editButtonText = isEditMode ? 'Save Changes' : 'Edit Profile';

  const hasMadeChanges = () =>
    userEmail !== email ||
    userFirstName !== firstName ||
    userLastName !== lastName;

  function updateEmail(email: string) {
    console.log('in component onEmailChange', email);
  }

  function editProfile() {
    setIsEditMode(true);
  }

  async function saveChanges() {
    setIsEditMode(false);
    if (hasMadeChanges()) {
      const { data } = await UPDATE({ firstName, lastName, id: 1 });
      const userItems = await GET_ITEMS_BY_USER_ID(data);
      console.log('userItems.data', userItems.data);
      dispatch(setUser({ ...data, items: userItems.data }));
    }
  }

  function handleGoToHome() {
    navigate(`/${ROUTE_PATHNAME.HOME}`);
  }

  function openPhotoUpload() {
    uploadPhotoInput.current.click();
    // open photo
  }

  function saveUserPhoto(e) {
    console.log('e', e.target.value);
    setUserPhoto(e.target.value);
    // open photo
  }

  return (
    <Layout>
      <div className="h-100 background-color__dark-blue p-xl">
        <h2 className="mt-none">User Profile</h2>
        <div className="flex mg-s j-center ">
          <div className="flex-column a-center">
            <img
              src={userPhoto}
              alt="Photo of user"
              className="img-small"
            ></img>
            <input
              type="file"
              id="imgupload"
              ref={uploadPhotoInput}
              style={{ display: 'none' }}
              onChange={saveUserPhoto}
            />
            <label htmlFor={'imgupload'} className="mt-sm">
              <button
                id="OpenImgUpload"
                className="button-green"
                onClick={openPhotoUpload}
              >
                Upload New User Photo
              </button>
            </label>
          </div>
          <div className="flex flex-column mg-lg">
            <span>
              {!isEditMode && (
                <>
                  <label htmlFor="name">Name</label> <br />
                  <input name="name" value={displayName} disabled={true} />
                </>
              )}
              {/* {isEditMode && <input name="name" defaultValue="{displayName}" />} */}
              {/* {isEditMode && <EditFullNameInputs />} */}
              {isEditMode && (
                <>
                  <label htmlFor="firstName">First Name</label> <br />
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <br />
                  <label htmlFor="lastName">Last Name</label> <br />
                  <input
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}
            </span>
            <span>
              <label htmlFor="">Email</label> <br />
              <input
                type="text"
                value={email}
                disabled={!isEditMode}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>

            <span>
              <label htmlFor="">Neighborhood</label> <br />
              <input
                type="text"
                value={location}
                disabled={!isEditMode}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </span>
          </div>
          <div>
            <button
              className="button-green"
              onClick={isEditMode ? saveChanges : editProfile}
            >
              {editButtonText}
            </button>
          </div>
        </div>
        <button className="button-green" onClick={handleGoToHome}>
          go home
        </button>
      </div>
    </Layout>
  );
}
