import { NavLink } from 'react-router-dom';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import './home-page.css';

const links = [
  {
    label: 'Work',
    to: '/work',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

export const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="home-page_container">
        {/* Title */}
        <div className="home-page_title">
          <h1>Luke Peña</h1>
          <h2>Full-stack developer, musician, artist</h2>
        </div>

        {/* Bio */}
        <div className="home-page_bio">
          <p>
            I am a full-stack developer who understands the importance of
            balancing good clean code with experimentation and discovery.
          </p>
          <p>
            I've been a hobby programmer since 2002, but embraced it as my
            profession in 2020.
          </p>
          <p>I am perpetually finding new ways to be creative and curious.</p>
        </div>

        {/* Biiiig links */}
        <div className="home-page_links">
          {links.map((link) => (
            <NavLink
              to={link.to}
              className="text-white hover:-translate-x-8 hover:text-orange-500 transition-all font-title"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
