import LightMode from './LightMode';
import { FaLinkedin } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { styled } from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <AppLayoutContainer>
      <div className="header">
        <p className="header-logo">DSA Admin Panel</p>
        <div className="header-items-box">
          <NavLink to="/dsa" className="nav-items">
            DSA
          </NavLink>
          <NavLink to="/aptitude" className="nav-items">
            Aptitude
          </NavLink>
          <NavLink to="/results" className="nav-items">
            Results
          </NavLink>
          <NavLink to="/others" className="nav-items">
            Others
          </NavLink>
          <LightMode />
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>

      <div className="footer">
        <div className="personal-details">
          <a
            href="https://www.linkedin.com/in/akash-mathad-389203238/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icons" />
          </a>

          <a
            href="https://twitter.com/Akash_Mathad"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="social-icons" />
          </a>
          <a
            href="https://www.instagram.com/akash__mathad/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icons" />
          </a>

          <p>&copy;Akash Mathad</p>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()}. All right reserved
        </div>
        <div className="personal-details">
          <a
            href="https://www.linkedin.com/in/ganeshmargale026/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icons" />
          </a>
          <FaXTwitter className="social-icons" />
          <a
            href="https://www.instagram.com/ganesh_026/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icons" />
          </a>
          <p>&copy;Ganesh S Margale</p>
        </div>
      </div>
    </AppLayoutContainer>
  );
}

const AppLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;

  .header {
    display: flex;
    padding: 1.4rem 3.2rem;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-md);

    .header-logo {
      font-size: 3.6rem;
      color: var(--color-brand-500);
    }

    .header-items-box {
      display: flex;
      align-items: center;
      gap: 4.4rem;
    }

    .nav-items {
      letter-spacing: 1px;
      color: var(--color-brand-900);
      transition: all 0.3s;
      cursor: pointer;
      text-decoration: none;

      &:hover,
      &:active,
      &.active {
        color: var(--color-brand-500);
      }
    }
  }

  .main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    position: relative;
  }

  .outlet {
    width: 100%;
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-md);
  }

  .footer {
    padding: 1.2rem 3.2rem;
    color: var(--color-grey-700);
    font-size: 1.6rem;
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-md);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .personal-details {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .social-icons {
      color: var(--color-brand-400);
      font-size: 2.4rem;
      transition: all 0.3s;

      &:hover {
        color: var(--color-brand-600);
      }
    }
  }
`;

export default AppLayout;
