import { Context } from './index';

export const actionFoo = ({ state, actions }: Context): void => {
    actions.actionBar();
};

export const actionBar = ({ state }: Context): void => {
    state.title = 'foo from action';
};
