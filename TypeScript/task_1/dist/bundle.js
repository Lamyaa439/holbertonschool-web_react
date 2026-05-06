/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printTeacher: () => (/* binding */ printTeacher)
/* harmony export */ });
// Example usage as per requirements
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: false,
    numberOfReports: 17,
};
// The function implementation
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
/**
 * The Class Implementation
 * use 'implements' to ensure the class follows the StudentClassInterface.
 */
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method returns a fixed string as per requirements
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    // Method returns the student's first name
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Lamyaa", "Alghaihab");
console.log(student.displayName()); // Should print: Lamyaa
console.log(student.workOnHomework()); // Should print: Currently working

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ1NBLG9DQUFvQztBQUNwQyxJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQU9GLDhCQUE4QjtBQUN2QixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFpQixFQUFFLFFBQWdCO0lBQ3BGLE9BQU8sVUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQW1CRjs7O0dBR0c7QUFDSDtJQUlFLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQTBDO0lBQzFDLGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQU0sdUJBQXVCO0FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBRSxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIERlZmluZSB0aGUgVGVhY2hlciBpbnRlcmZhY2VcbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIC8vIEluZGV4IHNpZ25hdHVyZSB0byBhbGxvdyBhZGRpbmcgYW55IG90aGVyIGF0dHJpYnV0ZXNcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbi8vIE5ldyBEaXJlY3RvcnMgaW50ZXJmYWNlIGV4dGVuZGluZyBUZWFjaGVyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlIGFzIHBlciByZXF1aXJlbWVudHNcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuLy8gSW50ZXJmYWNlIGZvciB0aGUgZnVuY3Rpb25cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuLy8gVGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uXG5leHBvcnQgY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4gJHtsYXN0TmFtZX1gO1xufTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZGVzY3JpYmluZyB0aGUgQ2xhc3MgKFRoZSBJbnN0YW5jZSBzaWRlKVxuICogVGhpcyBkZWZpbmVzIHRoZSBtZXRob2RzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICovXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGRlc2NyaWJpbmcgdGhlIENvbnN0cnVjdG9yIChUaGUgU3RhdGljIHNpZGUpXG4gKiBJbiBUeXBlU2NyaXB0LCB3ZSB1c2UgJ25ldycgdG8gZGVzY3JpYmUgYSBjb250cmFjdCBmb3IgYSBjbGFzcyBjb25zdHJ1Y3Rvci5cbiAqL1xuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbi8qKlxuICogVGhlIENsYXNzIEltcGxlbWVudGF0aW9uXG4gKiB1c2UgJ2ltcGxlbWVudHMnIHRvIGVuc3VyZSB0aGUgY2xhc3MgZm9sbG93cyB0aGUgU3R1ZGVudENsYXNzSW50ZXJmYWNlLlxuICovXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgfVxuXG4gIC8vIE1ldGhvZCByZXR1cm5zIGEgZml4ZWQgc3RyaW5nIGFzIHBlciByZXF1aXJlbWVudHNcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xuICB9XG5cbiAgLy8gTWV0aG9kIHJldHVybnMgdGhlIHN0dWRlbnQncyBmaXJzdCBuYW1lXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICB9XG59XG5cbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKFwiTGFteWFhXCIsIFwiQWxnaGFpaGFiXCIpO1xuY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKTsgICAgICAvLyBTaG91bGQgcHJpbnQ6IExhbXlhYVxuY29uc29sZS5sb2coc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTsgIC8vIFNob3VsZCBwcmludDogQ3VycmVudGx5IHdvcmtpbmdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==