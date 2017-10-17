"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceState = function (modules, newState) {
    return Object.keys(modules).reduce(function (acc, key) {
        return (__assign({}, acc, (_a = {}, _a[key] = __assign({}, modules[key], { state: newState[key] || modules[key].state }), _a)));
        var _a;
    }, {});
};
