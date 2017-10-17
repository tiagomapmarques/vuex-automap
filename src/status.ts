import { VuexAutomapStateStatus, VuexAutomapDefaultGetters } from './types';

export const stateStatus: VuexAutomapStateStatus = {
  init: 'INIT',
  loading: 'LOADING',
  ready: 'READY',
  error: 'ERROR',
};

export const statusGetters = (statusKey: string = 'status'): VuexAutomapDefaultGetters => ({
  isStatusInit: (state) => state[statusKey] === stateStatus.init,
  isStatusLoading: (state) => state[statusKey] === stateStatus.loading,
  isStatusReady: (state) => state[statusKey] === stateStatus.ready,
  isStatusError: (state) => state[statusKey] === stateStatus.error,
});
