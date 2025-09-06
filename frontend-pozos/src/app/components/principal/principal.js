"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Principal = void 0;
const core_1 = require("@angular/core");
const core_2 = require("@angular/core");
const core_3 = require("@angular/core");
const core_4 = require("@angular/core");
const forms_1 = require("@angular/forms");
@(0, core_1.Component)({
    selector: 'app-principal',
    imports: [forms_1.FormsModule],
    templateUrl: './principal.html',
    styleUrl: './principal.scss'
})
class Principal {
    title = (0, core_2.signal)('Gestión de Pozos');
    // Señal que contiene la lista de pozos
    items = (0, core_2.signal)([]);
    // Señales para inputs del formulario
    nombre = (0, core_2.signal)('');
    ubicacion = (0, core_2.signal)('');
    produccion_diaria = (0, core_2.signal)('');
    estado = (0, core_2.signal)('');
    // Computed para porcentaje de pozos activos
    porcentajeActivos = (0, core_3.computed)(() => {
        const total = this.items().length;
        if (total === 0)
            return 0;
        const activos = this.items().filter(p => p.estado === 'activo').length;
        return Math.round((activos / total) * 100);
    });
    // Función para agregar pozo a la lista
    agregarPozo() {
        if (!this.nombre() || !this.ubicacion() || !this.produccion_diaria() || !this.estado())
            return;
        this.items.set([
            ...this.items(),
            {
                nombre: this.nombre(),
                ubicacion: this.ubicacion(),
                produccion_diaria: this.produccion_diaria(),
                estado: this.estado()
            }
        ]);
        // Limpiar formulario
        this.nombre.set('');
        this.ubicacion.set('');
        this.produccion_diaria.set('');
        this.estado.set('');
    }
}
exports.Principal = Principal;
//# sourceMappingURL=principal.js.map