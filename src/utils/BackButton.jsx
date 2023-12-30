import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <button className="btn" onClick={goBack}>
      Back
    </button>
  );
}

export default BackButton;
