import { NavLink } from 'react-router-dom';

function OthersPage() {
  return (
    <div className="container">
      <NavLink to="/others/feedback" className="card">
        Feedbacks
      </NavLink>
      <NavLink to="/others/addMember" className="card">
        Add Member
      </NavLink>
      <NavLink to="/others/deleteMember" className="card">
        Delete Member
      </NavLink>
    </div>
  );
}

export default OthersPage;
