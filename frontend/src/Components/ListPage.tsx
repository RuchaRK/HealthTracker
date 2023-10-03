import styled from '@emotion/styled';
import * as React from 'react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  align-items: flex-start;
  height: 100%;
`;

const FirstSection = styled.div`
  height: 160px;
  width: 100%;
  border-radius: 12px;
  background: linear-gradient(90deg, #fc6212 42.28%, rgba(234, 88, 12, 0) 100%);
  display: flex;
  justify-content: space-between;
  padding: 4px 32px;
`;

const HeaderTextContainer = styled.div`
  padding: 28px 0px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const SecondSection = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px 16px;
`;

const HeaderRow = styled.tr``;

const ColumnHeading = styled.th`
  padding: 16px 16px 0px 16px;
  text-align: left;
`;

const ContentRow = styled.tr`
  background-color: #ffffff;
  border: none;
  outline: none;
`;

const Content = styled.td`
  border: 1px solid #fff;
  padding: 10px 16px;
  outline: none;
`;

const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 800;
`;

const Description = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.1px;
`;

const Button = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 10px;
`;

export const ListPage = ({ column, data, title, description, image }) => {
  return (
    <ListContainer>
      <FirstSection>
        <HeaderTextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>Add New </Button>
        </HeaderTextContainer>
        <img src={image} alt="workout" style={{ objectFit: 'cover' }} />
      </FirstSection>
      <SecondSection>
        <Table>
          <HeaderRow>
            {column.map((header) => (
              <ColumnHeading>{header}</ColumnHeading>
            ))}
          </HeaderRow>

          {data.map((row) => (
            <ContentRow>
              {row.map((x) => (
                <Content> {x}</Content>
              ))}
            </ContentRow>
          ))}
        </Table>
      </SecondSection>
    </ListContainer>
  );
};
