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
var vuex_1 = require("vuex");
var capitalize = require("capitalize");
var mapName = function (mod, name) { return "" + mod + capitalize(name); };
var stateReducer = function (mod) { return function (acc, key) {
    return (__assign({}, acc, (_a = {}, _a[mapName(mod, key)] = function (state) { return state[key]; }, _a)));
    var _a;
}; };
var functionReducer = function (mod) { return function (acc, key) {
    return (__assign({}, acc, (_a = {}, _a[mapName(mod, key)] = key, _a)));
    var _a;
}; };
exports.componentMappings = function (moduleName, module) { return ({
    state: vuex_1.mapState(moduleName, Object.keys(module.state).reduce(stateReducer(moduleName), {})),
    getters: vuex_1.mapGetters(moduleName, Object.keys(module.getters).reduce(functionReducer(moduleName), {})),
    actions: vuex_1.mapActions(moduleName, Object.keys(module.actions).reduce(functionReducer(moduleName), {})),
}); };
