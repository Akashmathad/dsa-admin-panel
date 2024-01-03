import { useNavigate } from 'react-router-dom';

function BackButton({ children }) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <button className="btn" onClick={goBack}>
      {children ? children : 'Back'}
    </button>
  );
}

export default BackButton;
