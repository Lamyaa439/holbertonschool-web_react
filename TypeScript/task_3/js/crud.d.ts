import { RowID, RowElement } from './interface';

/** 
 * We declare the types for the functions exported in crud.js 
 */
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
