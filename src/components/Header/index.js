import React from 'react';
import { HeaderBox, ArrowPosition, TitleBox } from './styles';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <HeaderBox>
      <ArrowPosition>
        <Link to={props.to}>
          <IoIosArrowBack size={'1.5em'} color={'black'} />
        </Link>
      </ArrowPosition>
      <TitleBox>
        <span>{props.title}</span>
      </TitleBox>
    </HeaderBox>
  );
}
