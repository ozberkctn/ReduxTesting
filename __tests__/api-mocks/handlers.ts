import {rest} from 'msw';
import {MAIN_URL} from '../../src/constants';
import ResultsData from '../src/screens/ResultsScreen/ResultItemData';
import TestsData from '../src/screens/TestScreen/TestItemData';

const testsAbsoluteUrl = `${MAIN_URL}/tests`;
const resultsAbsoluteUrl = `${MAIN_URL}/results`;

const testsHandler = rest.get(testsAbsoluteUrl, async (req, res, ctx) => {
  return res(ctx.json(TestsData));
});

const resultsHandler = rest.get(resultsAbsoluteUrl, async (req, res, ctx) => {
  return res(ctx.json(ResultsData));
});

export const tasksHandlerException = rest.get(
  testsAbsoluteUrl,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({message: 'Deliberately broken request'})),
);

export const handlers = [testsHandler, resultsHandler];
