/// <reference types="node" />
import { ColumnDefinition } from "../column.js";
import Database from "../Database.js";
import { Value } from "../types.js";
export declare function readFieldValue(buffer: Buffer, column: ColumnDefinition, db: Database): Value | undefined;
