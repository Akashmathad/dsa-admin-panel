import { useState } from 'react';
import BackButton from '../../utils/BackButton';
import { styled } from 'styled-components';
import Questions from './Questions';

function QuestionsList() {
  const [module, setModule] = useState();
  return (
    <QuestionsListContainer>
      <div className="back-btn-top">
        <BackButton />
      </div>
      <div className="header question-header">
        <h2 className="heading-primary">Questions List</h2>

        <select
          name=""
          id="module"
          className="modules options"
          onChange={(e) => setModule(e.target.value)}
        >
          <option value="" hidden>
            Select the module
          </option>
          <option value={0} className="modules options">
            Quantitative Aptitude: 1 - 4
          </option>
          <option value={1} className="modules options">
            Quantitative Aptitude: 5 - 8
          </option>
          <option value={2} className="modules options">
            Quantitative Aptitude: 9 - 12
          </option>
          <option value={3} className="modules options">
            Quantitative Aptitude: 13 - 17
          </option>
          <option value={4} className="modules options">
            Logical Reasoning: 1 - 3
          </option>
          <option value={5} className="modules options">
            Logical Reasoning: 4 - 6
          </option>
          <option value={6} className="modules options">
            Logical Reasoning: 7 - 11
          </option>
          <option value={7} className="modules options">
            Verbal Ability: 1 - 3
          </option>
          <option value={8} className="modules options">
            Verbal Ability: 4 - 6
          </option>
          <option value={9} className="modules options">
            Verbal Ability: 7 - 10
          </option>
        </select>
      </div>

      {module && <Questions module={module} />}
    </QuestionsListContainer>
  );
}

const QuestionsListContainer = styled.div`
  width: 125rem;
  height: 100%;
  font-size: 2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .question-header {
    padding: 1.2rem 2.4rem;
  }

  .options {
    background-color: var(--color-grey-50);
    color: var(--color-grey-700);
    font-family: inherit;
    font-size: 1.8rem;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: var(--border-radius-md);
    margin-left: 1rem;
  }
`;
export default QuestionsList;
