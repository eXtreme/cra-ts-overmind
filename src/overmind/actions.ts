import { Context } from './index';

export const actionFoo = ({ state, actions }: Context): void => {
    actions.actionBar();
};

export const actionBar = ({ }: Context): void => {

};
