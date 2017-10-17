import { VuexAutomapModules, VuexAutomapState } from './types';

export const replaceState = (modules: VuexAutomapModules, newState: { [key: string]: VuexAutomapState }): VuexAutomapModules => {
  return Object.keys(modules).reduce((acc, key) => ({
    ...acc,
    [key]: {
      ...modules[key],
      state: newState[key] || modules[key].state,
    },
  }), {});
};
