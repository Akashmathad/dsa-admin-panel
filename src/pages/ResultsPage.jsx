import { NavLink } from 'react-router-dom';

function ResultsPage() {
  return (
    <div className="container">
      <NavLink to="/results/aptitudeResult" className="card">
        Aptitude
      </NavLink>
      <NavLink to="/results/dsaResult" className="card">
        DSA
      </NavLink>
    </div>
  );
}

export default ResultsPage;
