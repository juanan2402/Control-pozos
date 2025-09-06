import {Pool} from "pg";

export const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    password:"Ned873624",
    database:'listapozos',
    port:5432
});