import { mapState, mapGetters, mapActions } from 'vuex';
import * as capitalize from 'capitalize';
import { VuexAutomapState, VuexAutomapMappings } from './types';

const mapName = (mod: string, name: string): string => `${mod}${capitalize(name)}`;

const stateReducer = (mod: string) => (acc: any, key: string) => ({
  ...acc,
  [mapName(mod, key)]: (state: VuexAutomapState) => state[key],
});

const functionReducer = (mod: string) => (acc: any, key: string): VuexAutomapState => ({
  ...acc,
  [mapName(mod, key)]: key,
});

export const componentMappings = (moduleName: string, module: VuexAutomapMappings) => ({
  state: mapState(moduleName, Object.keys(module.state).reduce(stateReducer(moduleName), {})),
  getters: mapGetters(moduleName, Object.keys(module.getters).reduce(functionReducer(moduleName), {})),
  actions: mapActions(moduleName, Object.keys(module.actions).reduce(functionReducer(moduleName), {})),
});
