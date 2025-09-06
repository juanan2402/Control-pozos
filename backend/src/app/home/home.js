"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const core_1 = require("@angular/core");
const pozos_1 = require("../services/pozos");
const pozos_type_1 = require("../model/pozos.type");
const rxjs_1 = require("rxjs");
//Componente general, compuesto del titulo, y las entradas para la lista
@(0, core_1.Component)({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
class Home {
    pozoService = (0, core_1.inject)(pozos_1.Pozos);
    pozoItems = (0, core_1.signal)([]);
    ngOnInit() {
        this.pozoService.getFromAPI()
            .pipe((0, rxjs_1.catchError)((err) => {
            console.error('Error en la petición', err);
            throw err;
        }))
            .subscribe((pozo) => {
            console.log('Respuesta del backend:', pozo);
            this.pozoItems.set(pozo);
            console.log('Contenido en la señal:', this.pozoItems());
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=home.js.map