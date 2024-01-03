import { styled } from 'styled-components';
import { FaRegUser } from 'react-icons/fa';
import { RiUserForbidLine } from 'react-icons/ri';
import { MdKey } from 'react-icons/md';
import { useContext, useState } from 'react';
// import { AppContext } from '../App';
import { useForm } from 'react-hook-form';
// import Loader from './Loader';

function DeleteMember() {
  const [loader, setLoader] = useState(false);
  const { register, handleSubmit } = useForm();
  // const { setOpenRemoveMember, handleToastSuccess, handleToastFail } =
  //   useContext(AppContext);

  async function onSubmit(data) {
    // data.currentUser = data.currentUser.toUpperCase();
    // data.username = data.username.toUpperCase();
    // setLoader(true);
    // try {
    //   const req = await fetch(
    //     'https://questionbank-ganesh.onrender.com/api/v1/question-bank/user/deleteUser',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   if (req.ok) {
    //     handleToastSuccess('Member deletion successful');
    //     setOpenRemoveMember(false);
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
            <RiUserForbidLine className="popup-icons" />
            <input
              {...register('username')}
              type="text"
              placeholder="Username (Delete Member)"
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

          <div className="buttons-box">
            <button
              className="btn cancel-btn"
              type="button"
              // onClick={() => setOpenRemoveMember(false)}
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

export default DeleteMember;
