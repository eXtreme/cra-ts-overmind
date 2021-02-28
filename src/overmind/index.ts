import type { IContext } from 'overmind';
import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook
} from 'overmind-react';
import * as actions from './actions';
import * as effects from './effects';
import { state } from './state';

export const config = {
    state,
    actions,
    effects,
};

export type Context = IContext<{
    state: typeof config.state,
    actions: typeof config.actions,
    effects: typeof config.effects,
}>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
