"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateStatus = {
    init: 'INIT',
    loading: 'LOADING',
    ready: 'READY',
    error: 'ERROR',
};
exports.statusGetters = function (statusKey) {
    if (statusKey === void 0) { statusKey = 'status'; }
    return ({
        isStatusInit: function (state) { return state[statusKey] === exports.stateStatus.init; },
        isStatusLoading: function (state) { return state[statusKey] === exports.stateStatus.loading; },
        isStatusReady: function (state) { return state[statusKey] === exports.stateStatus.ready; },
        isStatusError: function (state) { return state[statusKey] === exports.stateStatus.error; },
    });
};
