import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const HackTheBoxIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M256 0L32 128v256l224 128 224-128V128L256 0zm160 362.667l-160 91.667-160-91.667V149.333l160-91.667 160 91.667v213.334z"
      />
      <path
        fill="currentColor"
        d="M256 106.667l-128 73.333v152l128 73.333 128-73.333V180l-128-73.333zm96 201.333l-96 55-96-55V204l96-55 96 55v104z"
      />
      <path
        fill="currentColor"
        d="M256 234.667l-64 36.666v73.334l64 36.666 64-36.666v-73.334l-64-36.666z"
      />
    </SvgIcon>
  );
};

export default HackTheBoxIcon;
