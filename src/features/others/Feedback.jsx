import { styled } from 'styled-components';
import BackButton from '../../utils/BackButton';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import DeleteNotification from '../aptitude/DeleteNotification';

const feedbackArray = [
  {
    title: 'Great User Experience',
    description:
      'The website is very intuitive and easy to navigate. I love the clean design and responsive layout.',
    username: 'HappyUser123',
  },
  {
    title: 'Feature Request',
    description:
      'It would be helpful to have a dark mode option for better usability in low-light environments.',
    username: 'SuggestionMaster',
  },
  {
    title: 'Bug Report',
    description:
      "Encountered an issue when submitting a form. The data doesn't seem to be processed correctly.",
    username: 'BugHunter94',
  },
  {
    title: 'Responsive Design',
    description:
      'The website looks amazing on both desktop and mobile devices. Kudos to the development team!',
    username: 'TechEnthusiast',
  },
  {
    title: 'Suggestions for Improvement',
    description:
      'Adding a search feature would make it easier to find specific content. Overall, great job!',
    username: 'FeedbackGuru',
  },
  {
    title: 'Performance Feedback',
    description:
      'Pages load quickly, and the overall performance is impressive. Well done!',
    username: 'SpeedySurfer',
  },
  {
    title: 'Positive Feedback',
    description:
      'I appreciate the regular updates and new features. Keep up the good work!',
    username: 'FanaticUser',
  },
  {
    title: 'Login Experience',
    description:
      'The login process is smooth, but two-factor authentication would add an extra layer of security.',
    username: 'SecureUser123',
  },
  {
    title: 'Content Variety',
    description:
      'It would be great to see more diverse content types on the website. Looking forward to future updates!',
    username: 'ContentExplorer',
  },
  {
    title: 'User-Friendly Interface',
    description:
      "The website's interface is user-friendly, making it easy for users of all skill levels to navigate.",
    username: 'EasyGoLucky',
  },
];

function Feedback() {
  const [feedbacks, setFeedbacks] = useState(feedbackArray);

  function handleDelete(index) {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks.splice(index, 1);
    setFeedbacks(updatedFeedbacks);
  }

  return (
    <FeedbackContainer>
      <div className="back-btn-top">
        <BackButton />
      </div>

      <div className="header">
        <h2 className="heading-primary">Feedbacks</h2>
        <p>Count: {feedbacks.length}</p>
      </div>

      {feedbacks.map((feedback, index) => (
        <FeedbackMessage
          feedback={feedback}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </FeedbackContainer>
  );
}

function FeedbackMessage({ feedback, index, handleDelete }) {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div
      className="feedback-box"
      key={index}
      style={{
        backgroundColor:
          index % 2 === 0 ? 'var(--color-grey-100)' : 'var(--color-grey-50)',
      }}
    >
      <p>
        <span className="headings">Title: </span>{' '}
        <span className="title">{feedback.title}</span>
      </p>
      <p>
        <span className="headings">Desciption: </span> {feedback.description}
      </p>
      <p>
        <span className="headings">User: </span> {feedback.username}
      </p>
      {!openDelete && (
        <div
          className="close-btn"
          onClick={() => {
            setOpenDelete(true);
          }}
        >
          <IoClose />
        </div>
      )}
      {openDelete && (
        <DeleteNotification
          index={index}
          handleDelete={handleDelete}
          setOpenDelete={setOpenDelete}
        >
          <p>Are you sure, you want to delete this Feedback from Database ?</p>
        </DeleteNotification>
      )}
    </div>
  );
}

const FeedbackContainer = styled.div`
  width: 125rem;
  height: 100%;
  font-size: 2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-md);

  .feedback-box {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 3.2rem;
    cursor: pointer;
    color: var(--color-red-500);
  }

  .title {
    color: var(--color-brand-500);
    font-size: 2.2rem;
  }

  .headings {
    color: var(--color-grey-700);
  }
`;

export default Feedback;
