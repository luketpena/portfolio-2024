import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface AnchorProps {
  children: ReactNode;
  href: string;
  internal?: boolean;
}

export const Anchor: React.FC<AnchorProps> = ({ children, href, internal }) => {
  if (internal) {
    return (
      <NavLink
        to={href}
        className="text-orange-500 font-bold hover:text-orange-400 transition-colors"
      >
        {children}
      </NavLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      className="text-orange-500 font-bold hover:text-orange-400 transition-colors"
    >
      {children}
    </a>
  );
};
