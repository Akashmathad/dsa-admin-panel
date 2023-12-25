import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import LightMode from './utils/LightMode';
import { HiOutlineLogout } from 'react-icons/hi';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <div className="header">
        <p className="header-logo">DSA Admin Panel</p>
        <div className="header-items-box">
          <p className="header-username">@Akash Mathad</p>
          <LightMode />
          <HiOutlineLogout />
        </div>
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
