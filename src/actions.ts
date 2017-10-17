import { VuexAutomapActionStatus, VuexAutomapActionResultGetter } from './types';

export const actionStatus: VuexAutomapActionStatus = {
  ok: 'OK',
  error: 'ERROR',
};

export const okResult: VuexAutomapActionResultGetter = () => ({
  status: actionStatus.ok,
});

export const errorResult: VuexAutomapActionResultGetter = (message) => ({
  status: actionStatus.error,
  message,
});
