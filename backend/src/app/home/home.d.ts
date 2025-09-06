import { OnInit } from '@angular/core';
import { Pozos } from "../services/pozos";
import { Pozo } from "../model/pozos.type";
export declare class Home implements OnInit {
    pozoService: Pozos;
    pozoItems: import("@angular/core", { with: { "resolution-mode": "import" } }).WritableSignal<Pozo[]>;
    ngOnInit(): void;
}
//# sourceMappingURL=home.d.ts.map