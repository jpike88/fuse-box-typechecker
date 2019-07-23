"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkerCommand;
(function (WorkerCommand) {
    WorkerCommand[WorkerCommand["inspectCode"] = 0] = "inspectCode";
    WorkerCommand[WorkerCommand["printResult"] = 1] = "printResult";
    WorkerCommand[WorkerCommand["inspectCodeAndPrint"] = 2] = "inspectCodeAndPrint";
    WorkerCommand[WorkerCommand["watch"] = 3] = "watch";
    WorkerCommand[WorkerCommand["printSettings"] = 4] = "printSettings";
})(WorkerCommand = exports.WorkerCommand || (exports.WorkerCommand = {}));
var TypecheckerRunType;
(function (TypecheckerRunType) {
    TypecheckerRunType[TypecheckerRunType["sync"] = 'syns'] = "sync";
    TypecheckerRunType[TypecheckerRunType["async"] = 'async'] = "async";
    TypecheckerRunType[TypecheckerRunType["watch"] = 'watch'] = "watch";
    TypecheckerRunType[TypecheckerRunType["promiseAsync"] = 'promisesync'] = "promiseAsync";
})(TypecheckerRunType = exports.TypecheckerRunType || (exports.TypecheckerRunType = {}));
exports.END_LINE = '\n';
//# sourceMappingURL=interfaces.js.map