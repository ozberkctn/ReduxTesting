import React from 'react';
import styled from 'styled-components/native';
import {TestResultItemType, TestResultsDataType} from '../../../apiTypes';

function renderResults(data: TestResultsDataType) {
  return (
    <ResultContainer>
      {data.result.map((result: TestResultItemType) => (
        //color added to key string because the test data has two carbohydrates field which is mistaken
        <Result
          key={`${data.id}${result.biomarker}${result.color}`}
          color={result.color}>
          {result.biomarker} {result.percentage}%
        </Result>
      ))}
    </ResultContainer>
  );
}

const TestItem = ({data}: {data: TestResultsDataType}) => {
  return (
    <Container>
      <NameAndDateContainer>
        <Name>{data.title}</Name>
        <Date>{data.date}</Date>
      </NameAndDateContainer>
      <DetailsContainer>{renderResults(data)}</DetailsContainer>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;
`;
const NameAndDateContainer = styled.View`
  border: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;
const DetailsContainer = styled.View``;
const Name = styled.Text``;
const Date = styled.Text``;
const Result = styled.Text<{color: string}>`
  width: 50%;
  color: ${props => props.color};
`;
const ResultContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default TestItem;
