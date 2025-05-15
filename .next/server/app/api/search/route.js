"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Clegal-semantic-search-complete-code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Clegal-semantic-search-complete-code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Clegal-semantic-search-complete-code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Clegal-semantic-search-complete-code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_legal_semantic_search_complete_code_src_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/search/route.ts */ \"(rsc)/./src/app/api/search/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"D:\\\\legal-semantic-search-complete-code\\\\src\\\\app\\\\api\\\\search\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_legal_semantic_search_complete_code_src_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDbGVnYWwtc2VtYW50aWMtc2VhcmNoLWNvbXBsZXRlLWNvZGUlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNsZWdhbC1zZW1hbnRpYy1zZWFyY2gtY29tcGxldGUtY29kZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWdhbC1zZW1hbnRpYy1zZWFyY2gvPzA3MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcbGVnYWwtc2VtYW50aWMtc2VhcmNoLWNvbXBsZXRlLWNvZGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VhcmNoXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZWFyY2gvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZWFyY2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlYXJjaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXGxlZ2FsLXNlbWFudGljLXNlYXJjaC1jb21wbGV0ZS1jb2RlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNlYXJjaFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VhcmNoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Clegal-semantic-search-complete-code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Clegal-semantic-search-complete-code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/search/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/search/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"(rsc)/./node_modules/@pinecone-database/pinecone/dist/index.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @langchain/community/embeddings/voyage */ \"(rsc)/./node_modules/@langchain/community/embeddings/voyage.js\");\n/* harmony import */ var _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @langchain/pinecone */ \"(rsc)/./node_modules/@langchain/pinecone/index.js\");\n\n\n\n\nasync function POST(req) {\n    const { query } = await req.json();\n    if (!query) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Query is required\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Initialize Pinecone client\n        const pc = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__.Pinecone({\n            apiKey: process.env.PINECONE_API_KEY\n        });\n        // Initialize VoyageEmbeddings with correct inputType for queries\n        const voyageEmbeddings = new _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__.VoyageEmbeddings({\n            apiKey: process.env.VOYAGE_API_KEY,\n            inputType: \"query\",\n            modelName: \"voyage-law-2\"\n        });\n        // Initialize PineconeVectorStore\n        const vectorStore = new _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__.PineconeStore(voyageEmbeddings, {\n            pineconeIndex: pc.Index(process.env.PINECONE_INDEX)\n        });\n        console.log(`query is: ${query}`);\n        const retrieved = await vectorStore.maxMarginalRelevanceSearch(query, {\n            k: 20\n        });\n        // Filter to ensure results set is unique - filter on the metadata.id\n        const results = retrieved.filter((result, index)=>{\n            return index === retrieved.findIndex((otherResult)=>{\n                return result.metadata.id === otherResult.metadata.id;\n            });\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            results\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error performing similarity search:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to perform similarity search\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZWFyY2gvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFDbUI7QUFDdEI7QUFFN0MsZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7SUFFaEMsSUFBSSxDQUFDRCxPQUFPO1FBQ1YsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsSUFBSTtRQUNGLDZCQUE2QjtRQUM3QixNQUFNQyxLQUFLLElBQUlULGlFQUFRQSxDQUFDO1lBQ3RCVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtRQUN0QztRQUVBLGlFQUFpRTtRQUNqRSxNQUFNQyxtQkFBbUIsSUFBSWIsb0ZBQWdCQSxDQUFDO1lBQzVDUyxRQUFRQyxRQUFRQyxHQUFHLENBQUNHLGNBQWM7WUFDbENDLFdBQVc7WUFDWEMsV0FBVztRQUNiO1FBRUEsaUNBQWlDO1FBQ2pDLE1BQU1DLGNBQWMsSUFBSWhCLDhEQUFhQSxDQUFDWSxrQkFBa0I7WUFDdERLLGVBQWVWLEdBQUdXLEtBQUssQ0FBQ1QsUUFBUUMsR0FBRyxDQUFDUyxjQUFjO1FBQ3BEO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRWxCLE1BQU0sQ0FBQztRQUVoQyxNQUFNbUIsWUFBWSxNQUFNTixZQUFZTywwQkFBMEIsQ0FBQ3BCLE9BQU87WUFDcEVxQixHQUFHO1FBQ0w7UUFFQSxxRUFBcUU7UUFDckUsTUFBTUMsVUFBZUgsVUFBVUksTUFBTSxDQUFDLENBQUNDLFFBQVFDO1lBQzdDLE9BQ0VBLFVBQ0FOLFVBQVVPLFNBQVMsQ0FBQyxDQUFDQztnQkFDbkIsT0FBT0gsT0FBT0ksUUFBUSxDQUFDQyxFQUFFLEtBQUtGLFlBQVlDLFFBQVEsQ0FBQ0MsRUFBRTtZQUN2RDtRQUVKO1FBRUEsT0FBT25DLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRXFCO1FBQVEsR0FBRztZQUFFbkIsUUFBUTtRQUFJO0lBQ3RELEVBQUUsT0FBT0QsT0FBTztRQUNkZSxRQUFRZixLQUFLLENBQUMsdUNBQXVDQTtRQUNyRCxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQXNDLEdBQy9DO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLy4vc3JjL2FwcC9hcGkvc2VhcmNoL3JvdXRlLnRzPzVmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSBcIkBwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZVwiO1xyXG5pbXBvcnQgeyBWb3lhZ2VFbWJlZGRpbmdzIH0gZnJvbSBcIkBsYW5nY2hhaW4vY29tbXVuaXR5L2VtYmVkZGluZ3Mvdm95YWdlXCI7XHJcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tIFwiQGxhbmdjaGFpbi9waW5lY29uZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUXVlcnkgaXMgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEluaXRpYWxpemUgUGluZWNvbmUgY2xpZW50XHJcbiAgICBjb25zdCBwYyA9IG5ldyBQaW5lY29uZSh7XHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIFZveWFnZUVtYmVkZGluZ3Mgd2l0aCBjb3JyZWN0IGlucHV0VHlwZSBmb3IgcXVlcmllc1xyXG4gICAgY29uc3Qgdm95YWdlRW1iZWRkaW5ncyA9IG5ldyBWb3lhZ2VFbWJlZGRpbmdzKHtcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5WT1lBR0VfQVBJX0tFWSxcclxuICAgICAgaW5wdXRUeXBlOiBcInF1ZXJ5XCIsXHJcbiAgICAgIG1vZGVsTmFtZTogXCJ2b3lhZ2UtbGF3LTJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgUGluZWNvbmVWZWN0b3JTdG9yZVxyXG4gICAgY29uc3QgdmVjdG9yU3RvcmUgPSBuZXcgUGluZWNvbmVTdG9yZSh2b3lhZ2VFbWJlZGRpbmdzLCB7XHJcbiAgICAgIHBpbmVjb25lSW5kZXg6IHBjLkluZGV4KHByb2Nlc3MuZW52LlBJTkVDT05FX0lOREVYIGFzIHN0cmluZyksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgcXVlcnkgaXM6ICR7cXVlcnl9YCk7XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVkID0gYXdhaXQgdmVjdG9yU3RvcmUubWF4TWFyZ2luYWxSZWxldmFuY2VTZWFyY2gocXVlcnksIHtcclxuICAgICAgazogMjAsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgdG8gZW5zdXJlIHJlc3VsdHMgc2V0IGlzIHVuaXF1ZSAtIGZpbHRlciBvbiB0aGUgbWV0YWRhdGEuaWRcclxuICAgIGNvbnN0IHJlc3VsdHM6IGFueSA9IHJldHJpZXZlZC5maWx0ZXIoKHJlc3VsdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBpbmRleCA9PT1cclxuICAgICAgICByZXRyaWV2ZWQuZmluZEluZGV4KChvdGhlclJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1ldGFkYXRhLmlkID09PSBvdGhlclJlc3VsdC5tZXRhZGF0YS5pZDtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcmVzdWx0cyB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGVyZm9ybWluZyBzaW1pbGFyaXR5IHNlYXJjaDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBwZXJmb3JtIHNpbWlsYXJpdHkgc2VhcmNoXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUGluZWNvbmUiLCJWb3lhZ2VFbWJlZGRpbmdzIiwiUGluZWNvbmVTdG9yZSIsIlBPU1QiLCJyZXEiLCJxdWVyeSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInBjIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0FQSV9LRVkiLCJ2b3lhZ2VFbWJlZGRpbmdzIiwiVk9ZQUdFX0FQSV9LRVkiLCJpbnB1dFR5cGUiLCJtb2RlbE5hbWUiLCJ2ZWN0b3JTdG9yZSIsInBpbmVjb25lSW5kZXgiLCJJbmRleCIsIlBJTkVDT05FX0lOREVYIiwiY29uc29sZSIsImxvZyIsInJldHJpZXZlZCIsIm1heE1hcmdpbmFsUmVsZXZhbmNlU2VhcmNoIiwiayIsInJlc3VsdHMiLCJmaWx0ZXIiLCJyZXN1bHQiLCJpbmRleCIsImZpbmRJbmRleCIsIm90aGVyUmVzdWx0IiwibWV0YWRhdGEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/search/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@pinecone-database","vendor-chunks/@langchain","vendor-chunks/ajv","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/langsmith","vendor-chunks/uuid","vendor-chunks/whatwg-url","vendor-chunks/fast-uri","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/tr46","vendor-chunks/zod","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/json-schema-traverse","vendor-chunks/flat","vendor-chunks/fast-deep-equal","vendor-chunks/eventemitter3","vendor-chunks/decamelize","vendor-chunks/cross-fetch","vendor-chunks/camelcase","vendor-chunks/ansi-styles","vendor-chunks/@sinclair"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=D%3A%5Clegal-semantic-search-complete-code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Clegal-semantic-search-complete-code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();