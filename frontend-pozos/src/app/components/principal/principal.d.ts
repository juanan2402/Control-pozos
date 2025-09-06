interface Pozo {
    nombre: string;
    ubicacion: string;
    produccion_diaria: string;
    estado: 'activo' | 'inactivo';
}
export declare class Principal {
    title: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    items: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<Pozo[]>;
    nombre: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    ubicacion: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    produccion_diaria: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<string>;
    estado: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<"" | "activo" | "inactivo">;
    porcentajeActivos: import("@angular/core", { with: { "resolution-mode": "import" } }).Signal<number>;
    agregarPozo(): void;
}
export {};
//# sourceMappingURL=principal.d.ts.map