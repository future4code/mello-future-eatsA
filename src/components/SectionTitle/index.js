import React from 'react';
import { SectionInfo } from './styles';

export default function ProfileBox(props) {
  return (
    <SectionInfo>
      <p>{props.title}</p>
    </SectionInfo>
  );
}
