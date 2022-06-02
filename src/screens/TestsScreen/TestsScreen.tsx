import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import styled from 'styled-components/native';
import {TestResultsDataType} from '../../../apiTypes';
import {strings} from '../../../strings';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import {error, getTests, isLoading, tests} from '../../redux/api-slice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import TestItem from './TestItem';

const TestsScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
  const isLoadingState = useAppSelector(isLoading);
  const errorState = useAppSelector(error);
  const data = useAppSelector(tests);
  return (
    <Container>
      <Spinner visible={isLoadingState} />
      <Header title={strings.test_title} />
      <Error err={errorState} />
      {data ? (
        <FlatList
          testID="tests_list"
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}: ListRenderItemInfo<TestResultsDataType>) => (
            <TestItem data={item} />
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

export default TestsScreen;
