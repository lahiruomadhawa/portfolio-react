import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/lahiru-madhawamaha' target="_blank">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/lahiruomadhawa' target="_blank">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/lahiru.ashan.9' target="_blank">
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;