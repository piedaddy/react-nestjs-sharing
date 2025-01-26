import { SyntheticEvent, useState, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateUserEmail } from '@/store/features/user/userSlice';

import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_PATHNAME } from '@/@types/enumTypes';

import gaby from '../../public/L1007983.jpeg';
import Layout from '@/Layout';
import { UPDATE } from '@/apis/users.apis';

export default function UserProfile() {
  const initialEmail = useAppSelector((state) => state.user.email);

  const [email, setEmail] = useState(initialEmail);
  const [firstName, setFirstName] = useState('Gabrielle');
  const [lastName, setLastName] = useState('Wildfeuer');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('Praha 2');
  const [isEditMode, setIsEditMode] = useState(false);
  const [userPhoto, setUserPhoto] = useState(gaby);

  const uploadPhotoInput = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const [displayName] = useMemo(() => {
  //   return [`${firstName} ${lastName}`];
  // }, [firstName, lastName]);

  const displayName = `${firstName} ${lastName}`;

  const editButtonText = isEditMode ? 'Save Changes' : 'Edit Profile';

  function updateEmail(email: string) {
    console.log('in component onEmailChange', email);

    dispatch(updateUserEmail(email));
  }

  function onPasswordChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  }

  function goToSignUpPage() {
    console.log('goToSignUpPage');
  }
  function editProfile() {
    setIsEditMode(true);
  }

  async function saveChanges() {
    setIsEditMode(false);

    // if (initialEmail !== email) {
    //   updateEmail(email);
    // }

    const { data } = await UPDATE({ firstName, lastName, id: 1 });
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

  // function EditFullNameInputs() {
  //   return (
  //     <>
  //       <label htmlFor="firstName">First Name</label>
  //       <input name="firstName" value={firstName} onChange={} />

  //       <label htmlFor="lastName">Last Name</label>
  //       <input
  //         name="lastName"
  //         value={lastName}
  //         onChange={(e) => setLastName(e.target.value)}
  //       />
  //     </>
  //   );
  //}

  return (
    <Layout>
      <h2>User Profile</h2>
      <div className="flex mg-s j-center ">
        <div className="flex-column a-center">
          <img src={userPhoto} alt="Photo of user" className="img-small"></img>
          <input
            type="file"
            id="imgupload"
            ref={uploadPhotoInput}
            style={{ display: 'none' }}
            onChange={saveUserPhoto}
          />
          <label htmlFor={'imgupload'} className="mt-sm">
            <button onClick={openPhotoUpload} id="OpenImgUpload">
              Upload New User Photo
            </button>
          </label>
        </div>
        <div className="flex flex-column mg-lg">
          <span>
            {!isEditMode && (
              <>
                <label htmlFor="name">Name</label> <br />
                <input name="name" defaultValue={displayName} disabled={true} />
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
          {/* <span>
            <label htmlFor="">Password</label>
            {isEditMode ? (
              <input type="text" value="****" />
            ) : (
              <button>Change Pass</button>
            )}
          </span> */}
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
          <button onClick={isEditMode ? saveChanges : editProfile}>
            {editButtonText}
          </button>
        </div>
      </div>
      <button onClick={handleGoToHome}>go home</button>
    </Layout>
  );
}
