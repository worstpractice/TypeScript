currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/home/src/projects/project/app/Component-demos.ts]
import * as helpers from 'demos/helpers';
export const demo = () => {
    helpers;
}


//// [/home/src/projects/project/app/Component.ts]
export const Component = () => {}


//// [/home/src/projects/project/app/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outDir": "../app-dist/"
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "**/*-demos.*"
  ]
}

//// [/home/src/projects/project/demos/helpers.ts]
export const foo = 1;


//// [/home/src/projects/project/demos/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "../",
    "outDir": "../demos-dist/",
    "paths": {
      "demos/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*",
    "../app/**/*-demos.*"
  ]
}

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./demos/tsconfig.json"
    },
    {
      "path": "./app/tsconfig.json"
    }
  ]
}

//// [/home/src/projects/random/random.ts]
export let a = 10;

//// [/home/src/projects/random/tsconfig.json]
{ }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/project/app/Component-demos.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-1 "export const Component = () => {}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "e045cfff085eecf970c7400c2ccce12615df3b6cac3c69591527cc19e385b065",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 34,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "outDir": ""
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": true,
          "exclude": true,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/demos/tsconfig.json",
   "originalPath": "./demos/tsconfig.json"
  },
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/helpers.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/demos/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/demos/helpers.ts",
  "/home/src/projects/project/app/Component-demos.ts"
 ],
 "options": {
  "composite": true,
  "rootDir": "/home/src/projects/project",
  "outDir": "/home/src/projects/project/demos-dist",
  "paths": {
   "demos/*": [
    "./*"
   ]
  },
  "pathsBasePath": "/home/src/projects/project/demos",
  "configFilePath": "/home/src/projects/project/demos/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-1 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-1-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-1 "export const Component = () => {}\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	demos/helpers.ts
	  Imported via 'demos/helpers' from file 'app/Component-demos.ts'
	  Matched by default include pattern '**/*'
	app/Component-demos.ts
	  Matched by default include pattern '**/*'
	app/Component.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "1097a5f82e8323ba7aba7567ec06402f7ad4ea74abce44ec5efd223ac77ff169",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 3,
            "tsSize": 141,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "outDir": ""
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/demos/tsconfig.json",
        "reason": "Creating project referenced in solution /home/src/projects/project/tsconfig.json to find possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/demos/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-1 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-1-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	helpers.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'
	  Imported via 'demos/helpers' from file '../app/Component-demos.ts'
	../app/Component-demos.ts
	  Matched by include pattern '../app/**/*-demos.*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/demos/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "528692a1575f61fd3bf7069493cc100a7cad975f6cd24c47b7a63b99928a8171",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 2,
            "tsSize": 107,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "rootDir": "",
            "outDir": "",
            "paths": ""
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": true,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/Component-demos.ts",
        "configFile": "/home/src/projects/project/demos/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/demos/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/app/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json: *new*
  {}
/home/src/projects/project/demos/helpers.ts: *new*
  {}
/home/src/projects/project/demos/tsconfig.json: *new*
  {}
/home/src/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project: *new*
  {}
/home/src/projects/project/app: *new*
  {}
/home/src/projects/project/demos: *new*
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 3
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 1
1: checkOne *new*

Before running Timeout callback:: count: 1
1: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/app/Component-demos.ts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
1: semanticCheck *new*

Before running Immedidate callback:: count: 1
1: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/app/Component-demos.ts",
        "diagnostics": []
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
2: suggestionCheck *new*

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/app/Component-demos.ts",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 2
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/tsconfig.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/random/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/random/random.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/random/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/random/random.ts"
 ],
 "options": {
  "configFilePath": "/home/src/projects/random/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/random/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/random/random.ts SVC-1-0 "export let a = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	random.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/random/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "e22b756ee376200084d2e12c26227743b638008b743888b07aa480c1f77c0554",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 18,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/random/random.ts",
        "configFile": "/home/src/projects/random/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/random/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random: *new*
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 4 *changed*
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json *new*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-1-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-1-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/project/app/Component-demos.ts"
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component-demos.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component-demos.ts: *new*
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*
/home/src/projects/project/demos/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/project/app/Component.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-1
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/home/src/projects/project/app/Component.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts
	/home/src/projects/project/demos/helpers.ts
	/home/src/projects/project/app/Component-demos.ts
	/home/src/projects/project/app/Component.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	demos/helpers.ts
	  Imported via 'demos/helpers' from file 'app/Component-demos.ts'
	  Matched by default include pattern '**/*'
	app/Component-demos.ts
	  Matched by default include pattern '**/*'
	app/Component.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/home/src/projects/project/demos/helpers.ts
	/home/src/projects/project/app/Component-demos.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	helpers.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'
	  Imported via 'demos/helpers' from file '../app/Component-demos.ts'
	../app/Component-demos.ts
	  Matched by include pattern '../app/**/*-demos.*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/Component-demos.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/helpers.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/project/app/Component-demos.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/project/demos/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/project/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *deleted*
        /home/src/projects/project/tsconfig.json *deleted*
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts *deleted*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /home/src/projects/project/tsconfig.json *deleted*
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/project/app/Component.ts *deleted*
    version: Text-1
    containingProjects: 0 *changed*
        /home/src/projects/project/app/tsconfig.json *deleted*
        /home/src/projects/project/tsconfig.json *deleted*
/home/src/projects/project/demos/helpers.ts *deleted*
    version: Text-1
    containingProjects: 0 *changed*
        /home/src/projects/project/tsconfig.json *deleted*
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 7,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/random/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		undefined
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/project/app/Component-demos.ts"
      },
      "seq": 8,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/demos/tsconfig.json",
   "originalPath": "./demos/tsconfig.json"
  },
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 1 undefined Config: /home/src/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/helpers.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/demos/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/demos/helpers.ts",
  "/home/src/projects/project/app/Component-demos.ts"
 ],
 "options": {
  "composite": true,
  "rootDir": "/home/src/projects/project",
  "outDir": "/home/src/projects/project/demos-dist",
  "paths": {
   "demos/*": [
    "./*"
   ]
  },
  "pathsBasePath": "/home/src/projects/project/demos",
  "configFilePath": "/home/src/projects/project/demos/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	demos/helpers.ts
	  Imported via 'demos/helpers' from file 'app/Component-demos.ts'
	  Matched by default include pattern '**/*'
	app/Component-demos.ts
	  Matched by default include pattern '**/*'
	app/Component.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/demos/tsconfig.json",
        "reason": "Creating project referenced in solution /home/src/projects/project/tsconfig.json to find possible configured project for /home/src/projects/project/app/Component-demos.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/demos/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	helpers.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'
	  Imported via 'demos/helpers' from file '../app/Component-demos.ts'
	../app/Component-demos.ts
	  Matched by include pattern '../app/**/*-demos.*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/demos/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/Component-demos.ts",
        "configFile": "/home/src/projects/project/demos/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/demos/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/home/src/projects/random/random.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	random.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/tsconfig.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/app/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project/package.json: *new*
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json: *new*
  {}
/home/src/projects/project/demos/helpers.ts: *new*
  {}
/home/src/projects/project/demos/tsconfig.json: *new*
  {}
/home/src/projects/project/tsconfig.json: *new*
  {}

FsWatches *deleted*::
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project: *new*
  {}
/home/src/projects/project/app: *new*
  {}
/home/src/projects/project/demos: *new*
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/projects/project/app/tsconfig.json *new*
        /home/src/projects/project/tsconfig.json *new*
        /home/src/projects/project/demos/tsconfig.json *new*
        /home/src/projects/random/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts (Open) *new*
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts *new*
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts *deleted*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /home/src/projects/random/tsconfig.json *deleted*

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 3
2: /home/src/projects/project/app/tsconfig.json
3: /home/src/projects/project/tsconfig.json
4: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/app/tsconfig.json]
{
  "compilerOptions": {
    
    "outDir": "../app-dist/"
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "**/*-demos.*"
  ]
}


Timeout callback:: count: 3
2: /home/src/projects/project/app/tsconfig.json *new*
3: /home/src/projects/project/tsconfig.json *new*
4: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: false *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 3
5: /home/src/projects/project/app/tsconfig.json
6: /home/src/projects/project/tsconfig.json
7: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/app/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outDir": "../app-dist/"
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "**/*-demos.*"
  ]
}


Timeout callback:: count: 3
5: /home/src/projects/project/app/tsconfig.json *new*
6: /home/src/projects/project/tsconfig.json *new*
7: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 3 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 1
    dirty: false *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 9,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/tsconfig.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/random/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/random/random.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/random/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/random/random.ts"
 ],
 "options": {
  "configFilePath": "/home/src/projects/random/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random 1 undefined Config: /home/src/projects/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/random/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/random/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/random/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/random/random.ts SVC-2-0 "export let a = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	random.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/random/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/random/random.ts",
        "configFile": "/home/src/projects/random/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/random/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random: *new*
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 3
/home/src/projects/random/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 4 *changed*
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json *new*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts (Open) *new*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 10,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 3
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 3
8: /home/src/projects/project/app/tsconfig.json
9: /home/src/projects/project/tsconfig.json
10: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/app/tsconfig.json]
{
  "compilerOptions": {
    
    "outDir": "../app-dist/"
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "**/*-demos.*"
  ]
}


Timeout callback:: count: 3
8: /home/src/projects/project/app/tsconfig.json *new*
9: /home/src/projects/project/tsconfig.json *new*
10: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 4 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 9,
              "offset": 5
            },
            "end": {
              "line": 11,
              "offset": 6
            },
            "text": "Referenced project '/home/src/projects/project/app/tsconfig.json' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/home/src/projects/project/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 1
    dirty: false *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 4 *changed*
    dirty: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 11,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 4
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 12,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 4
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/app/tsconfig.json 1:: WatchInfo: /home/src/projects/project/app/tsconfig.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 3
11: /home/src/projects/project/app/tsconfig.json
12: /home/src/projects/project/tsconfig.json
13: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/app/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outDir": "../app-dist/"
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "**/*-demos.*"
  ]
}


Timeout callback:: count: 3
11: /home/src/projects/project/app/tsconfig.json *new*
12: /home/src/projects/project/tsconfig.json *new*
13: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 5 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 5 *changed*
    projectProgramVersion: 4
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 5 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 5 projectProgramVersion: 4 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/tsconfig.json ProjectRootPath: undefined:: Result: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 5
    projectProgramVersion: 1
    dirty: false *changed*
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 5
    projectProgramVersion: 5 *changed*
    dirty: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
14: /home/src/projects/project/tsconfig.json
15: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
14: /home/src/projects/project/tsconfig.json *new*
15: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 6 *changed*
    projectProgramVersion: 5
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 6 projectProgramVersion: 5 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 6
    projectProgramVersion: 6 *changed*
    dirty: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
16: /home/src/projects/project/tsconfig.json
17: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./demos/tsconfig.json"
    },
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
16: /home/src/projects/project/tsconfig.json *new*
17: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 7 *changed*
    projectProgramVersion: 6
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/demos/tsconfig.json",
   "originalPath": "./demos/tsconfig.json"
  },
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 7 projectProgramVersion: 6 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 7
    projectProgramVersion: 7 *changed*
    dirty: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 13,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 7
    projectProgramVersion: 7
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 14,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 7
    projectProgramVersion: 7
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 4
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/demos/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
18: /home/src/projects/project/tsconfig.json
19: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
18: /home/src/projects/project/tsconfig.json *new*
19: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 8 *changed*
    projectProgramVersion: 7
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 8 projectProgramVersion: 7 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json,/home/src/projects/project/demos/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/project/demos:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 8
    projectProgramVersion: 8 *changed*
    dirty: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/tsconfig.json
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 15,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/demos/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/home/src/projects/project/demos/helpers.ts
	/home/src/projects/project/app/Component-demos.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	helpers.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'
	  Imported via 'demos/helpers' from file '../app/Component-demos.ts'
	../app/Component-demos.ts
	  Matched by include pattern '../app/**/*-demos.*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/demos/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/demos/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/projects/project/demos/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/project/demos/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/random:
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/project/demos:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/demos/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 8
    projectProgramVersion: 8
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts (Open) *changed*
    version: SVC-2-0
    containingProjects: 1 *changed*
        /home/src/projects/project/tsconfig.json *default*
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts *changed*
    version: Text-2
    containingProjects: 1 *changed*
        /home/src/projects/project/tsconfig.json
        /home/src/projects/project/demos/tsconfig.json *deleted*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 16,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/demos/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/demos/helpers.ts:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project:
  {}
/home/src/projects/project/app:
  {}
/home/src/projects/random:
  {}

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured)
    projectStateVersion: 8
    projectProgramVersion: 8
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 3
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/app/Component.ts
    version: Text-2
    containingProjects: 2
        /home/src/projects/project/app/tsconfig.json
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/demos/helpers.ts
    version: Text-2
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/home/src/projects/project/tsconfig.json
	findDefaultConfiguredProject:
		/home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 1:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
20: /home/src/projects/project/tsconfig.json
21: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./demos/tsconfig.json"
    },
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
20: /home/src/projects/project/tsconfig.json *new*
21: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/app/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 1
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 9 *changed*
    projectProgramVersion: 8
    dirty: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component-demos.ts",
  "/home/src/projects/project/app/Component.ts",
  "/home/src/projects/project/demos/helpers.ts"
 ],
 "options": {
  "outDir": "/home/src/projects/project/dist",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/projects/project/demos/tsconfig.json",
   "originalPath": "./demos/tsconfig.json"
  },
  {
   "path": "/home/src/projects/project/app/tsconfig.json",
   "originalPath": "./app/tsconfig.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/demos/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/demos/helpers.ts",
  "/home/src/projects/project/app/Component-demos.ts"
 ],
 "options": {
  "composite": true,
  "rootDir": "/home/src/projects/project",
  "outDir": "/home/src/projects/project/demos-dist",
  "paths": {
   "demos/*": [
    "./*"
   ]
  },
  "pathsBasePath": "/home/src/projects/project/demos",
  "configFilePath": "/home/src/projects/project/demos/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/demos/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/demos 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/demos/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 9 projectProgramVersion: 8 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/demos/helpers.ts Text-2 "export const foo = 1;\n"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"
	/home/src/projects/project/app/Component.ts Text-2 "export const Component = () => {}\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/tsconfig.json",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/app: *new*
  {}
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *new*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-6
    containingProjects: 1
        /home/src/projects/project/app/tsconfig.json
/home/src/projects/random/random.ts
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 2:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 2:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
20: /home/src/projects/project/app/tsconfig.json
21: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json] deleted

Timeout callback:: count: 2
20: /home/src/projects/project/app/tsconfig.json *new*
21: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    noOpenRef: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Same program as before
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: false *changed*
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 0:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 0:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
22: /home/src/projects/project/app/tsconfig.json
23: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./demos/tsconfig.json"
    },
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
22: /home/src/projects/project/app/tsconfig.json *new*
23: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    noOpenRef: false *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 3 projectProgramVersion: 1 structureChanged: false structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Same program as before
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 1
    dirty: false *changed*
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 17,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/home/src/projects/project/app/Component.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/project/app:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *deleted*
    projectStateVersion: 3
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *deleted*
    version: Text-6
    containingProjects: 0 *changed*
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 18,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 2:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 2:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
24: /home/src/projects/project/app/tsconfig.json
25: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json] deleted

Timeout callback:: count: 2
24: /home/src/projects/project/app/tsconfig.json *new*
25: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Loading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-7 "export const Component = () => {}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/app: *new*
  {}
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *new*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-7
    containingProjects: 1
        /home/src/projects/project/app/tsconfig.json
/home/src/projects/random/random.ts
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 19,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/home/src/projects/project/app/Component.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/project/app:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *deleted*
    version: Text-7
    containingProjects: 0 *changed*
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 20,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 0:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/tsconfig.json 0:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
26: /home/src/projects/project/app/tsconfig.json
27: *ensureProjectForOpenFiles*
//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist/"
  },
  "references": [
    {
      "path": "./demos/tsconfig.json"
    },
    {
      "path": "./app/tsconfig.json"
    }
  ]
}


Timeout callback:: count: 2
26: /home/src/projects/project/app/tsconfig.json *new*
27: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Loading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-8 "export const Component = () => {}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/app/Component-demos.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/app/Component-demos.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/app: *new*
  {}
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*
    noOpenRef: true *changed*
/home/src/projects/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *new*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-8
    containingProjects: 1
        /home/src/projects/project/app/tsconfig.json
/home/src/projects/random/random.ts
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before running Timeout callback:: count: 0
//// [/home/src/projects/project/demos/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "../",
    "outDir": "../demos-dist/",
    "paths": {
      "demos/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*",
    
  ]
}


After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before running Timeout callback:: count: 0
//// [/home/src/projects/project/demos/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "../",
    "outDir": "../demos-dist/",
    "paths": {
      "demos/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*",
    "../app/**/*-demos.*"
  ]
}


After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 21,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/home/src/projects/project/app/Component.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/project/app/Component.ts:
  {}
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

FsWatchesRecursive *deleted*::
/home/src/projects/project/app:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/project/app/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *deleted*
    version: Text-8
    containingProjects: 0 *changed*
        /home/src/projects/project/app/tsconfig.json *deleted*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 22,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before running Timeout callback:: count: 0
//// [/home/src/projects/project/demos/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "../",
    "outDir": "../demos-dist/",
    "paths": {
      "demos/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*",
    
  ]
}


After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 23,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/random/random.ts ProjectRootPath: undefined:: Result: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/projects/random/random.ts:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/home/src/projects/random/random.ts"
      },
      "seq": 24,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts: *new*
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/inferredProject2*
        /home/src/projects/random/tsconfig.json
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/random/random.ts *changed*
    open: false *changed*
    version: SVC-2-0
    containingProjects: 1
        /home/src/projects/random/tsconfig.json

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before running Timeout callback:: count: 0
//// [/home/src/projects/project/demos/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "../",
    "outDir": "../demos-dist/",
    "paths": {
      "demos/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*",
    "../app/**/*-demos.*"
  ]
}


After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] File: /home/src/projects/project/app/Component-demos.ts:
	getDefaultProjectForFile:
		/dev/null/inferredProject2*
	findDefaultConfiguredProject:
		undefined
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "reloadProjects",
      "seq": 25,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] reload projects.
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/random/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined:: Result: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json",
        "reason": "User requested reload projects"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/app/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/app/Component.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/home/src/projects/project/app-dist",
  "configFilePath": "/home/src/projects/project/app/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app 1 undefined Config: /home/src/projects/project/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/Component.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /home/src/projects/project/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component.ts Text-9 "export const Component = () => {}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/app/tsconfig.json",
        "configFile": "/home/src/projects/project/app/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0) NoProgram

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/app/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/app/Component-demos.ts SVC-2-0 "import * as helpers from 'demos/helpers';\nexport const demo = () => {\n    helpers;\n}\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	Component-demos.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] After reloading projects..
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/app/Component-demos.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500} *new*
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500} *new*
/home/src/projects/project/app/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/app/package.json:
  {"pollingInterval":2000}
/home/src/projects/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/projects/project/node_modules:
  {"pollingInterval":500} *new*
/home/src/projects/project/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project/package.json:
  {"pollingInterval":2000}
/home/src/projects/random/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/random/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/app/node_modules:
  {"pollingInterval":500}
/home/src/projects/project/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects/project/app/Component.ts: *new*
  {}
/home/src/projects/project/app/tsconfig.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}
/home/src/projects/random/random.ts:
  {}
/home/src/projects/random/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/app: *new*
  {}
/home/src/projects/random:
  {}

Timeout callback:: count: 0

Projects::
/dev/null/inferredProject2* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
/home/src/projects/project/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/home/src/projects/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/projects/random/tsconfig.json
        /home/src/projects/project/app/tsconfig.json *new*
        /dev/null/inferredProject2*
/home/src/projects/project/app/Component-demos.ts (Open)
    version: SVC-2-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/home/src/projects/project/app/Component.ts *new*
    version: Text-9
    containingProjects: 1
        /home/src/projects/project/app/tsconfig.json
/home/src/projects/random/random.ts *changed*
    version: SVC-2-0
    pendingReloadFromDisk: true *changed*
    containingProjects: 1
        /home/src/projects/random/tsconfig.json
