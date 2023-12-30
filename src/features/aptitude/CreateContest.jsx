import { styled } from 'styled-components';
import { useState } from 'react';
import BackButton from './../../utils/BackButton';

export const modules = [
  'Number system, HCF-LCM and Decimal Fractions, Simplification, Percentages',
  'Profit-Loss and Discounts, Simple - Compound Interest, Averages, Alligations and Mixtures',
  'Ratios-Proportions ans Variations, Partnership, Time and work, Time-speed and Distance',
  'Trains-Boats-Streams-Races, Permutation and combination, Probablity, Data Interpretation, Ages',
  'Blood Relations, Direction sense Test, Series',
  'Coding and Decoding, Analogy, Seating Arrangement,Data Arrangement',
  'Clocks, Calendars, syllogisms, Data Sufficiency',
  'Articles and Prepositions, Subject verb Agreement, Change of speech',
  'Change of voice, Sentence Correction, Sentence Completion',
  'Cloze Test, Ordering of Sentences, Reading Comprehension, Critical Reasoning',
];

function CreateContest() {
  const [questions, setQuestions] = useState(0);

  const [inputValues, setInputValues] = useState(Array(modules.length).fill(0));
  const [time, setTime] = useState();
  console.log(time, questions, inputValues);

  function divideNumberIntoArray(number) {
    const resultArray = Array.from({ length: 10 }, () =>
      Math.floor(number / 10)
    );
    const remainder = number % 10;
    for (let i = 0; i < remainder; i++) {
      resultArray[i]++;
    }

    return setInputValues(resultArray);
  }

  function handleInputChange(index, value) {
    const updatedInputs = [...inputValues];
    updatedInputs[index] = String(value).padStart(2, '0');
    setInputValues(updatedInputs);
  }

  return (
    <CreateContestContainer>
      <div className="back-btn-top">
        <BackButton />
      </div>
      <h2 className="heading-primary">Create Contest</h2>
      <div className="question-input-boxes">
        <div className="question-input-box">
          <label>Number of Questions:</label>
          <input
            className="input"
            type="text"
            value={questions}
            onChange={(e) => {
              setQuestions(e.target.value);
              divideNumberIntoArray(e.target.value);
            }}
          />
        </div>

        {modules.map((moduleName, index) => (
          <div className="question-input-box" key={index}>
            <label>{moduleName}: </label>
            <input
              className="input"
              type="text"
              value={inputValues[index]}
              onChange={(e) =>
                handleInputChange(index, parseInt(e.target.value || 0, 10))
              }
            />
          </div>
        ))}
        <div className="question-input-box">
          <label>Date and Time:</label>
          <input
            className="input date-input"
            type="datetime-local"
            onChange={(e) => setTime(new Date(e.target.value).getTime())}
          />
        </div>
      </div>
      <button className="btn btn-submit">Submit</button>
    </CreateContestContainer>
  );
}

const CreateContestContainer = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-grey-100);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  .question-input-boxes {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 2rem;
    color: var(--color-grey-700);
  }

  .question-input-box {
    display: flex;
    justify-content: space-between;
  }

  .input {
    background-color: var(--color-grey-50);
    border: none;
    font-size: 2rem;
    color: var(--color-grey-700);
    width: 23rem;
    padding: 2px 1rem;
    outline: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s;

    &:hover,
    &:focus {
      background-color: var(--color-grey-200);
    }
  }

  .btn-submit {
    width: 15rem;
    align-self: flex-end;
  }
`;

export default CreateContest;
