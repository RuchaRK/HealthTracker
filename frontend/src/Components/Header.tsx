import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
`;

const Heading = styled.div`
  display: flex;
`;
const GreetingsContainer = styled.div`
  display: flex;
`;

const Greetings = styled.div``;

const Search = styled.div``;
const SearchContainer = styled.div``;

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading>
        <h1>Fitness</h1>
      </Heading>
      <GreetingsContainer>
        <Greetings>
          <small>Good Morning</small>
          <h4>Welcome Back!!!</h4>
        </Greetings>
        <SearchContainer>
          <Search></Search>
        </SearchContainer>
      </GreetingsContainer>
    </HeaderContainer>
  );
};
