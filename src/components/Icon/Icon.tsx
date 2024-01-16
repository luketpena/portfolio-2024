import React from 'react';
import { IconContext } from 'react-icons/lib';

import * as GameIcons from 'react-icons/gi';
import * as FontAwesome6Icons from 'react-icons/fa6';
import * as SimpleIcons from 'react-icons/si';
const IconOptions = { ...GameIcons, ...FontAwesome6Icons, ...SimpleIcons };
export type IconName = keyof typeof IconOptions | undefined | null;

interface IconProps {
  name: IconName;
  color?: string;
  size?: string;
  strokeWidth?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = '24px',
  strokeWidth = '1px',
  className,
}) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      {name &&
        React.createElement(IconOptions[name], {
          className,
          style: { strokeWidth },
        })}
    </IconContext.Provider>
  );
};

export default Icon;
