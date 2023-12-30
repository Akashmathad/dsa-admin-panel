import { NavLink, Outlet } from 'react-router-dom';

function AptitudePage() {
  return (
    <div>
      <NavLink to="/aptitude/createAptitudeContest">Create Contest</NavLink>
      <NavLink to="/aptitude/questionReview">Questions</NavLink>
      <NavLink to="/aptitude/availableAptitudeContests">
        Available contests
      </NavLink>
    </div>
  );
}

export default AptitudePage;
