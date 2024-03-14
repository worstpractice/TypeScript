//// [tests/cases/conformance/node/nodeModulesDeclarationEmitWithPackageExports.ts] ////

//// [index.ts]
// esm format file
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export const a = cjs;
export const b = mjs;
export const c = type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export const d = cjsi;
export const e = mjsi;
export const f = typei;
//// [index.mts]
// esm format file
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export const a = cjs;
export const b = mjs;
export const c = type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export const d = cjsi;
export const e = mjsi;
export const f = typei;
//// [index.cts]
// cjs format file
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export const a = cjs;
export const b = mjs;
export const c = type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export const d = cjsi;
export const e = mjsi;
export const f = typei;
//// [index.d.ts]
// cjs format file
import * as cjs from "inner/cjs";
import * as mjs from "inner/mjs";
import * as type from "inner";
cjs;
mjs;
type;
export const cjsMain = true;
//// [index.d.mts]
// esm format file
import * as cjs from "inner/cjs";
import * as mjs from "inner/mjs";
import * as type from "inner";
cjs;
mjs;
type;
export const esm = true;
//// [index.d.cts]
// cjs format file
import * as cjs from "inner/cjs";
import * as mjs from "inner/mjs";
import * as type from "inner";
cjs;
mjs;
type;
export const cjsNonmain = true;
//// [package.json]
{
    "name": "package",
    "private": true,
    "type": "module",
    "exports": {
        "./cjs": "./index.cjs",
        "./mjs": "./index.mjs",
        ".": "./index.js"
    }
}
//// [package.json]
{
    "name": "inner",
    "private": true,
    "exports": {
        "./cjs": "./index.cjs",
        "./mjs": "./index.mjs",
        ".": "./index.js"
    }
}

//// [index.mjs]
// esm format file
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export const a = cjs;
export const b = mjs;
export const c = type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export const d = cjsi;
export const e = mjsi;
export const f = typei;
//// [index.cjs]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, configurable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, configurable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = void 0;
// cjs format file
const cjs = __importStar(require("package/cjs"));
const mjs = __importStar(require("package/mjs"));
const type = __importStar(require("package"));
exports.a = cjs;
exports.b = mjs;
exports.c = type;
const cjsi = __importStar(require("inner/cjs"));
const mjsi = __importStar(require("inner/mjs"));
const typei = __importStar(require("inner"));
exports.d = cjsi;
exports.e = mjsi;
exports.f = typei;
//// [index.js]
// esm format file
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export const a = cjs;
export const b = mjs;
export const c = type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export const d = cjsi;
export const e = mjsi;
export const f = typei;


//// [index.d.mts]
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export declare const a: typeof cjs;
export declare const b: typeof mjs;
export declare const c: typeof type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export declare const d: typeof cjsi;
export declare const e: typeof mjsi;
export declare const f: typeof typei;
//// [index.d.cts]
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export declare const a: typeof cjs;
export declare const b: typeof mjs;
export declare const c: typeof type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export declare const d: typeof cjsi;
export declare const e: typeof mjsi;
export declare const f: typeof typei;
//// [index.d.ts]
import * as cjs from "package/cjs";
import * as mjs from "package/mjs";
import * as type from "package";
export declare const a: typeof cjs;
export declare const b: typeof mjs;
export declare const c: typeof type;
import * as cjsi from "inner/cjs";
import * as mjsi from "inner/mjs";
import * as typei from "inner";
export declare const d: typeof cjsi;
export declare const e: typeof mjsi;
export declare const f: typeof typei;
