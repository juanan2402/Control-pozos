"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pozos = void 0;
const core_1 = require("@angular/core");
const pozos_type_1 = require("../model/pozos.type");
const http_1 = require("@angular/common/http");
@(0, core_1.Injectable)({
    providedIn: 'root'
})
class Pozos {
    http = (0, core_1.inject)(http_1.HttpClient);
    getFromAPI() {
        const url = 'http://localhost:4000/pozos';
        return this.http.get(url);
    }
} //Se debería utilizar el service pozo, a través de HttpClient para extraer el array con estructura Pozo.
exports.Pozos = Pozos;
//# sourceMappingURL=pozos.js.map