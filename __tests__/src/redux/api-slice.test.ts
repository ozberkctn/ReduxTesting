import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import {getResults, getTests} from '../../../src/redux/api-slice';
import resultsData from '../screens/ResultsScreen/ResultItemData';
import testsData from '../screens/TestScreen/TestItemData';
const mockStore = configureStore([thunk]);

it('check results api', () => {
  const store = mockStore({});

  return store.dispatch(getResults()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('api/results/pending');
    expect(actions[1].payload.toString()).toEqual(resultsData.toString());
  });
});

it('check tests api', () => {
  const store = mockStore({});

  return store.dispatch(getTests()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('api/tests/pending');
    expect(actions[1].payload.toString()).toEqual(testsData.toString());
  });
});
