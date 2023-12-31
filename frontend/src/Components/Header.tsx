import styled from '@emotion/styled';
import { CgProfile } from 'react-icons/cg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 32px;
  border-bottom: 1px solid #cbd5e1;
  background: #fff;
  max-height: 100px;
  height: 100%;
  align-items: center;
`;

const Greetings = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
`;

const IconContainer = styled.div``;

export const Header = () => {
  return (
    <HeaderContainer>
      <Greetings>
        <small>Good Morning</small>
        <h4>Welcome Back!!!</h4>
      </Greetings>

      <IconContainer>
        <CgProfile size={25} />
      </IconContainer>
    </HeaderContainer>
  );
};
