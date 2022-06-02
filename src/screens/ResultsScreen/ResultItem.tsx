import React from 'react';
import styled from 'styled-components/native';
import {ResultsType, SampleType} from '../../../apiTypes';

function renderSample(samples: SampleType[]) {
  return (
    <SampleContainer>
      {samples.map((sample: SampleType) => (
        <SampleItem key={`${sample.time}${sample.value}`}>
          {sample.time} {sample.value}
        </SampleItem>
      ))}
    </SampleContainer>
  );
}

const ResultItem = ({data}: {data: ResultsType}) => {
  return (
    <Container>
      <NameAndDateContainer>
        <Name>{data.name}</Name>
        <Date>{data.email}</Date>
      </NameAndDateContainer>
      <DetailsContainer>{renderSample(data.samples)}</DetailsContainer>
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
const SampleItem = styled.Text``;
const SampleContainer = styled.View``;

export default ResultItem;
