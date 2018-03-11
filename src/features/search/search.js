
import { GROUP_BY_DAY, GROUP_BY_WEEK, GROUP_BY_MONTH, SORT_BY_ASC, SORT_BY_DESC } from 'features/review/review';

export const groupArray = [
  {
    value: GROUP_BY_DAY,
    label: 'Day'
  },
  {
    value: GROUP_BY_WEEK,
    label: 'Week'
  },
  {
    value: GROUP_BY_MONTH,
    label: 'Month'
  },
];

export const sortArray = [
  {
    value: SORT_BY_ASC,
    label: 'ASC'
  },
  {
    value: SORT_BY_DESC,
    label: 'DESC'
  }
];
