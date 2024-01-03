import { styled } from 'styled-components';
import BackButton from '../../utils/BackButton';
import { useState } from 'react';
import AptitudeStats from './AptitudeStats';

const contests = [
  { contestNumber: 3, contestName: 'Aptitude - 03', time: 1702783800000 },
  { contestNumber: 2, contestName: 'Aptitude - 02', time: 1702638920350 },
  { contestNumber: 1, contestName: 'Aptitude - 01', time: 1702638920350 },
];

function AptitudeResults() {
  const [resultList, setResultList] = useState(contests);
  const [contestName, setContestName] = useState();
  const [contestNumber, setContestNumber] = useState();
  const [openStats, setOpenStats] = useState();

  return (
    <>
      {!openStats && (
        <AptitudeResultsContainer>
          <div className="back-btn-top">
            <BackButton />
          </div>
          <h3 className="heading-primary">Aptitude Result List</h3>
          <div className="contest-boxes">
            {resultList.map((result) => (
              <div
                className="contest-box"
                onClick={() => {
                  setContestNumber(result.contestNumber);
                  setContestName(result.contestName);
                  setOpenStats(true);
                }}
              >
                <p className="heading-secondary">{result.contestName}</p>
                <p>
                  Date:{' '}
                  {`${new Date(result.time).getDate()} / ${
                    new Date(result.time).getMonth() + 1
                  } / ${new Date(result.time).getFullYear()}`}
                </p>
              </div>
            ))}
          </div>
        </AptitudeResultsContainer>
      )}
      {openStats && (
        <AptitudeStats
          setOpenStats={setOpenStats}
          contestName={contestName}
          contestNumber={contestNumber}
        />
      )}
    </>
  );
}

const AptitudeResultsContainer = styled.div`
  height: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-100);
  padding: 3.2rem 4.8rem;
  border-radius: var(--border-radius-md);

  .contest-boxes {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .contest-box {
    padding: 1.2rem 2.4rem;
    width: 60rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey-50);
    color: var(--color-grey-950);
    border-radius: var(--border-radius-md);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-200);
    }
  }
`;

export default AptitudeResults;
