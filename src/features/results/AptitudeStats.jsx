import { styled } from 'styled-components';

function AptitudeStats({ contestName, contestNumber, setOpenStats }) {
  return (
    <AptitudeStatsContainer>
      <div className="back-btn-top btn" onClick={() => setOpenStats(false)}>
        Close
      </div>
      <h2 className="heading-primary">{contestName}</h2>
      <div className="student-number-boxes">
        <div className="branch-box">
          <p className="student-heading">Total Students</p>
          <p className="student-number number-bg">456</p>
        </div>
        <div className="branch-boxes">
          <div className="grid-3-cols ">
            <div className="branch-box">
              <p className="student-heading">CSE</p>
              <p className="student-number">120</p>
            </div>
            <div className="branch-box">
              <p className="student-heading">ISE</p>
              <p className="student-number">120</p>
            </div>
            <div className="branch-box">
              <p className="student-heading">ECE</p>
              <p className="student-number">120</p>
            </div>
          </div>
          <div className="grid-4-cols">
            <div className="branch-box">
              <p className="student-heading">EEE</p>
              <p className="student-number">120</p>
            </div>
            <div className="branch-box">
              <p className="student-heading">ME</p>
              <p className="student-number">120</p>
            </div>
            <div className="branch-box">
              <p className="student-heading">CV</p>
              <p className="student-number">120</p>
            </div>
            <div className="branch-box">
              <p className="student-heading">AV</p>
              <p className="student-number">120</p>
            </div>
          </div>
        </div>
      </div>
    </AptitudeStatsContainer>
  );
}

const AptitudeStatsContainer = styled.div`
  width: 125rem;
  height: 100%;
  font-size: 2rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--color-grey-100);
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-md);

  .student-number-boxes {
    width: 100%;
    display: grid;
    grid-template-columns: 30fr 70fr;
    gap: 1.2rem;
  }

  .branch-boxes {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .grid-3-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  .grid-4-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  .branch-box {
    padding: 3.8rem;
    background-color: var(--color-grey-50);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-grey-200);
  }

  .student-heading {
    font-size: 2.4rem;
    letter-spacing: 1.5px;
  }

  .student-number {
    font-size: 4.2rem;
    letter-spacing: 1px;
    color: var(--color-brand-500);
  }

  .number-bg {
    font-size: 8.2rem;
  }
`;

export default AptitudeStats;
