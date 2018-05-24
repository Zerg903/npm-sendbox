import { ActionUnion, createAction } from '../../lib/action-helpers';

export const DECREMENT_VALUE = 'counter/DECREMENT_VALUE';
export const INCREMENT_VALUE = 'counter/INCREMENT_VALUE';
export const RESET_VALUE = 'counter/RESET_VALUE';

export const Actions = {
  decrement: () => createAction(DECREMENT_VALUE),
  increment: () => createAction(INCREMENT_VALUE),
  reset: (value: number) => createAction(RESET_VALUE, value),
};

export type Actions = ActionUnion<typeof Actions>;