import { styled } from 'styled-components';
import { FaRegUser } from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import { CgLock } from 'react-icons/cg';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { CgLockUnlock } from 'react-icons/cg';
import { MdKey } from 'react-icons/md';
import { useContext, useState } from 'react';
// import { AppContext } from '../App';
import { useForm } from 'react-hook-form';
// import Loader from './Loader';

function AddMember() {
  const [loader, setLoader] = useState(false);
  const { register, handleSubmit } = useForm();
  // const { setOpenAddMember, handleToastSuccess, handleToastFail } =
  //   useContext(AppContext);

  async function onSubmit(data) {
    // setLoader(true);
    // data.currentUser = data.currentUser.toUpperCase();
    // data.username = data.username.toUpperCase();
    // if (data.password !== data.confirmPassword) {
    //   handleToastFail("Password doesn't match!");
    //   return;
    // }
    // try {
    //   const req = await fetch(
    //     'https://questionbank-ganesh.onrender.com/api/v1/question-bank/user/signup',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   console.log(req);
    //   if (req.ok) {
    //     handleToastSuccess('Member addition successful');
    //     setOpenAddMember(false);
    //   }
    //   if (req.status === 401) {
    //     handleToastFail('Incorrect Username or Password');
    //   }
    //   setLoader(false);
    // } catch (e) {
    //   handleToastFail(
    //     'Check your Internet connection, if error still exists contact the developers'
    //   );
    //   setLoader(false);
    // }
  }

  return (
    <AddMemberContainer className="popup-container">
      <div className="popup-box">
        <h3 className="popup-heading">Member Details</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="popup-form">
          <div className="input-details-box">
            <FaRegUser className="popup-icons" />
            <input
              {...register('currentUser')}
              type="text"
              placeholder="Your Username"
              className="input-details"
              required
            />
          </div>

          <div className="input-details-box">
            <MdKey className="popup-icons" />
            <input
              {...register('currentPassword')}
              type="password"
              placeholder="Your Password"
              className="input-details"
              required
            />
          </div>

          <div className="input-details-box">
            <FaRegUser className="popup-icons" />
            <input
              {...register('name')}
              type="text"
              placeholder="Name (New Member)"
              className="input-details"
              required
            />
          </div>

          <div className="input-details-box">
            <RiUserAddLine className="popup-icons" />
            <input
              {...register('username')}
              type="text"
              placeholder="Username (New Member)"
              className="input-details"
              required
            />
          </div>

          <div className="input-details-box">
            <MdOutlineAdminPanelSettings className="popup-icons" />
            <select className="input-details" {...register('admin')}>
              <option value="" hidden>
                Admin access
              </option>
              <option value={true} className="input-details">
                Yes
              </option>
              <option value={false} className="input-details">
                No
              </option>
            </select>
          </div>

          <div className="input-details-box">
            <CgLock className="popup-icons" />
            <input
              {...register('password')}
              type="password"
              placeholder="Password (New Member)"
              className="input-details"
              required
            />
          </div>

          <div className="input-details-box">
            <CgLockUnlock className="popup-icons" />
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="Confirm Password (New Member)"
              className="input-details"
              required
            />
          </div>

          <div className="buttons-box">
            <button
              className="btn cancel-btn"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                // setOpenAddMember(false);
              }}
            >
              Cancel
            </button>
            {loader ? (
              <div className="btn add-member-btn">{/* <Loader /> */}</div>
            ) : (
              <input className="btn add-member-btn" type="submit" />
            )}
          </div>
        </form>
      </div>
    </AddMemberContainer>
  );
}

const AddMemberContainer = styled.div`
  .add-member-btn {
    background-color: var(--color-brand-500);
    width: 100%;

    &:hover {
      background-color: var(--color-brand-600);
    }
  }

  .cancel-btn {
    background-color: var(--color-grey-50);
    box-shadow: inset 0 0 0 0.5px var(--color-brand-600);
    color: var(--color-grey-700);
    width: 100%;

    &:hover {
      background-color: var(--color-brand-500);
      color: var(--color-grey-50);
    }
  }
`;

export default AddMember;
