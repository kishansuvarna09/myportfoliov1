import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const defaultProps = {
  iconType: undefined,
};

type Props = {
  iconType: string;
  link?: string;
  isEmailIcon?: boolean;
} & typeof defaultProps;

const SocialIcons = ({ iconType, link, isEmailIcon = false }: Props) => {
  let _icon;
  if (iconType === 'github') {
    _icon = faGithub;
  } else if (iconType === 'linkedin') {
    _icon = faLinkedin;
  } else if (iconType === 'instagram') {
    _icon = faInstagram;
  } else if (iconType === 'envelope') {
    _icon = faEnvelope;
  }

  if (!_icon) return null;
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.5,
        transition: { duration: 0.5 },
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer"
      title={isEmailIcon ? 'mailTo:kishansuvarna09@gmail.com' : ''}
    >
      {isEmailIcon ? (
        <a href="mailto:kishansuvarna09@gmail.com">
          <FontAwesomeIcon icon={_icon} />
        </a>
      ) : (
        <Link href={link} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={_icon} />
          </a>
        </Link>
      )}
    </motion.div>
  );
};

export default SocialIcons;
