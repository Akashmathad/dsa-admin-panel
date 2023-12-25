import { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
function LightMode() {
  // const { lightMode, setLightMode } = useContext(AppContext);
  const [lightMode, setLightMode] = useState(false);
  return (
    <Button onClick={() => setLightMode((mode) => !mode)}>
      {lightMode ? <FaRegMoon /> : <FiSun />}
    </Button>
  );
}

const Button = styled.div`
  color: var(--color-grey-500);
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LightMode;
