"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const core_1 = require("@angular/core");
const home_1 = require("./home/home");
@(0, core_1.Component)({
    selector: 'app-root',
    imports: [home_1.Home],
    template: `
    <app-home><app-home />

  `,
    styles: [],
})
class App {
    title = (0, core_1.signal)('backend');
}
exports.App = App;
//# sourceMappingURL=app.js.map