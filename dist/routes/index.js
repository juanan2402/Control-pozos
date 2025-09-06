"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/pozos', index_controllers_1.getPozos);
router.post('/pozos', index_controllers_1.createPozo);
router.patch('/pozos/:id', index_controllers_1.updatePozoEstado);
exports.default = router;
//# sourceMappingURL=index.js.map