
export interface VuexAutomapActionStatus {
  ok: string;
  error: string;
}

export interface VuexAutomapActionResult {
  status: string;
  message?: string;
}

export type VuexAutomapActionResultGetter = (message?: string) => VuexAutomapActionResult;

export interface VuexAutomapState {
  [key: string]: any;
}

export interface VuexAutomapStateStatus {
  init: string;
  loading: string;
  ready: string;
  error: string;
}

export interface VuexAutomapDefaultGetters {
  isStatusInit: (state: VuexAutomapState) => boolean;
  isStatusLoading: (state: VuexAutomapState) => boolean;
  isStatusReady: (state: VuexAutomapState) => boolean;
  isStatusError: (state: VuexAutomapState) => boolean;
}

export interface VuexAutomapGetters extends VuexAutomapDefaultGetters {
  [key: string]: (state: VuexAutomapState) => any;
}

export type VuexAutomapMutationName = string;

export type VuexAutomapMutation = (state: VuexAutomapState, info?: any) => void;

export interface VuexAutomapMutations {
  [key: string]: VuexAutomapMutation;
}

export interface VuexAutomapStateInformation {
  commit: (mutationName: VuexAutomapMutationName) => void;
  state: VuexAutomapState;
  getters: VuexAutomapGetters;
}

export type VuexAutomapAction = (stateInformation: VuexAutomapStateInformation, info?: any) => any;

export interface VuexAutomapActions {
  [key: string]: VuexAutomapAction;
}

export interface VuexAutomapModule {
  namespaced: boolean;
  state: VuexAutomapState;
  getters: VuexAutomapGetters;
  actions: VuexAutomapActions;
  mutations: VuexAutomapMutations;
}

export interface VuexAutomapModules {
  [key: string]: VuexAutomapModule;
}

export interface VuexAutomapMappings {
  state: { [key: string]: any };
  getters: { [key: string]: any };
  actions: { [key: string]: any };
}
