"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const app_routes_1 = require("./app.routes");
const http_1 = require("@angular/common/http");
exports.appConfig = {
    providers: [
        (0, core_1.provideBrowserGlobalErrorListeners)(),
        (0, http_1.provideHttpClient)(),
        (0, core_1.provideZonelessChangeDetection)(),
        (0, router_1.provideRouter)(app_routes_1.routes)
    ]
};
//# sourceMappingURL=app.config.js.map