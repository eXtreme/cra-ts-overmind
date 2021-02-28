import { Overmind } from 'overmind';
import { Context } from './index';

export const actionFoo = ({ state }: Context, title: string): void => {
    state.title = title;
};

export const actionBar = ({ state }: Context): void => {
    state.title = 'foo from action';
};
