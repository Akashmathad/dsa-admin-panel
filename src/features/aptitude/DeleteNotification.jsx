import { styled } from 'styled-components';
function DeleteNotification({ index, handleDelete, setOpenDelete }) {
  return (
    <DeleteNotificationContainer
      style={{
        backgroundColor:
          index % 2 === 0 ? 'var(--color-grey-100)' : 'var(--color-grey-50)',
      }}
    >
      <p>Are you sure, you want to delete this question from Database ?</p>
      <div className="buttons">
        <button className="btn btn-no" onClick={() => setOpenDelete(false)}>
          No
        </button>
        <button
          className="btn btn-yes"
          onClick={() => {
            handleDelete(index);
            setOpenDelete(false);
          }}
        >
          Yes
        </button>
      </div>
    </DeleteNotificationContainer>
  );
}

const DeleteNotificationContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  font-size: 2rem;
  font-family: inherit;

  .buttons {
    display: flex;
    gap: 2.4rem;
  }

  .btn-no {
    width: 10rem;
    background-color: var(--color-grey-300);
    color: var(--color-grey-900);

    &:hover {
      background-color: var(--color-grey-400);
    }
  }

  .btn-yes {
    width: 10rem;
    background-color: var(--color-red-400);
    color: var(--color-grey-900);

    &:hover {
      background-color: var(--color-red-500);
    }
  }
`;

export default DeleteNotification;
