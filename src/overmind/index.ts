import type { IContext } from 'overmind';
import * as actions from './actions';
import * as effects from './effects';
import { state } from './state';

const config = {
    state,
    actions,
    effects,
};

export type Context = IContext<{
    state: typeof config.state,
    actions: typeof config.actions,
    effects: typeof config.effects
}>;
