export interface TestResultItemType {
  biomarker: string;
  color: string;
  percentage: number;
}

export interface TestResultsDataType {
  id: string;
  title: string;
  date: string;
  result: TestResultItemType[];
}

export interface SampleType {
  time: string;
  value: number;
}

export interface ResultsType {
  id: string;
  name: string;
  email: string;
  samples: SampleType[];
}
