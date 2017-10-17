"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionStatus = {
    ok: 'OK',
    error: 'ERROR',
};
exports.okResult = function () { return ({
    status: exports.actionStatus.ok,
}); };
exports.errorResult = function (message) { return ({
    status: exports.actionStatus.error,
    message: message,
}); };
