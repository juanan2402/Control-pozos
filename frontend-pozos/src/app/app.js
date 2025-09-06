"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const principal_1 = require("./components/principal/principal");
@(0, core_1.Component)({
    selector: 'app-root',
    imports: [router_1.RouterOutlet, principal_1.Principal],
    template: `
    <app-principal />
  `,
    styles: [],
})
class App {
    title = (0, core_1.signal)('frontend-pozos');
}
exports.App = App;
//# sourceMappingURL=app.js.map