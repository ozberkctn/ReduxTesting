import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import styled from 'styled-components/native';
import {ResultsType} from '../../../apiTypes';
import {strings} from '../../../strings';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import ResultItem from './ResultItem';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {error, getResults, isLoading, results} from '../../redux/api-slice';

const ResultsScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);
  const isLoadingState = useAppSelector(isLoading);
  const errorState = useAppSelector(error);
  const data = useAppSelector(results);
  return (
    <Container>
      <Spinner visible={isLoadingState} />
      <Header title={strings.results_title} />
      <Error err={errorState} />
      {data ? (
        <FlatList
          testID="results_list"
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}: ListRenderItemInfo<ResultsType>) => (
            <ResultItem data={item} />
          )}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  margin-vertical: 14px;
  margin-horizontal: 14px;
`;

export default ResultsScreen;
