"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const principal_1 = require("./principal");
describe('Principal', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [principal_1.Principal]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(principal_1.Principal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=principal.spec.js.map