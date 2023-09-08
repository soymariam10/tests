 import { describe, expect, test } from "@jest/globals";
import { saludo } from "../api/prueba";
 describe("test del archivo prueba.js", ()=>{
    test("La funcion devuelve un 'hello world'",()=>{
        expect(saludo()).toBe("hello world")
    })
 })