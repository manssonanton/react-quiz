import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: left;
  color: palevioletred;
`;

const Navs = styled.nav`
  width: 90vw;
`;

function Nav() {
    return (
        <Navs>
               <Title>RT.QUIZ</Title>
        </Navs>
    );
}

export default Nav;