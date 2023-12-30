import { useState } from 'react';
import { styled } from 'styled-components';
import { modules } from './CreateContest';
import { IoClose } from 'react-icons/io5';
import DeleteNotification from './DeleteNotification';

const aptitudeQuestions = [
  {
    question: 'What is the capital of France?',
    options: { A: 'Berlin', B: 'Paris', C: 'Rome', D: 'Madrid' },
    answer: 'B',
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: { A: 'Earth', B: 'Jupiter', C: 'Mars', D: 'Saturn' },
    answer: 'B',
  },
  {
    question: 'What is the square root of 64?',
    options: { A: '8', B: '6', C: '10', D: '4' },
    answer: 'A',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: {
      A: 'Charles Dickens',
      B: 'William Shakespeare',
      C: 'Jane Austen',
      D: 'Mark Twain',
    },
    answer: 'B',
  },
  {
    question: 'What is the capital of Japan?',
    options: { A: 'Seoul', B: 'Beijing', C: 'Tokyo', D: 'Bangkok' },
    answer: 'C',
  },
  {
    question: 'What is the formula for the area of a rectangle?',
    options: {
      A: 'length × width',
      B: 'πr²',
      C: '½ × base × height',
      D: 'length + width',
    },
    answer: 'A',
  },
  {
    question: "Which element has the chemical symbol 'H'?",
    options: { A: 'Helium', B: 'Hydrogen', C: 'Hassium', D: 'Hafnium' },
    answer: 'B',
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: {
      A: 'Nucleus',
      B: 'Mitochondria',
      C: 'Endoplasmic Reticulum',
      D: 'Golgi Apparatus',
    },
    answer: 'B',
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: {
      A: 'Charles Babbage',
      B: 'Alan Turing',
      C: 'Bill Gates',
      D: 'Steve Jobs',
    },
    answer: 'A',
  },
  {
    question: 'What is the boiling point of water in Celsius?',
    options: { A: '100', B: '0', C: '50', D: '200' },
    answer: 'A',
  },
];

function Questions({ module }) {
  const [questionList, setQuestionList] = useState(aptitudeQuestions);

  function handleDelete(index) {
    const updatedQuestions = [...questionList];
    updatedQuestions.splice(index, 1);
    setQuestionList(updatedQuestions);
  }

  return (
    <QuestionsContainer>
      <div className="header question-header">
        <h3 className="heading-secondary">{modules[module]}</h3>
        <p>Count: {questionList.length}</p>
      </div>
      {questionList.map((question, index) => (
        <Question
          question={question}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </QuestionsContainer>
  );
}

function Question({ question, index, handleDelete }) {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div
      className="question-box"
      key={index}
      style={{
        backgroundColor:
          index % 2 === 0 ? 'var(--color-grey-100)' : 'var(--color-grey-50)',
      }}
    >
      <p className="question-description">{question.question}</p>
      <div className="question-options">
        {Object.entries(question.options).map(([key, value]) => (
          <p key={key}>{`${key} : ${value}`}</p>
        ))}
      </div>
      <p>Ans: {question.answer}</p>
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
        />
      )}
    </div>
  );
}

const QuestionsContainer = styled.div`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-md);

  font-size: 1.8rem;

  .question-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 1.2rem 2.4rem;
    position: relative;
  }

  .question-options {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 3.2rem;
    cursor: pointer;
    color: var(--color-red-500);
  }
`;

export default Questions;
