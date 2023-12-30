import { NavLink } from 'react-router-dom';

function AptitudePage() {
  return (
    <div className="container">
      <NavLink to="/aptitude/createAptitudeContest" className="card">
        Create Contest
      </NavLink>
      <NavLink to="/aptitude/questionReview" className="card">
        Questions
      </NavLink>
      <NavLink to="/aptitude/availableAptitudeContests" className="card">
        Available contests
      </NavLink>
    </div>
  );
}

export default AptitudePage;
