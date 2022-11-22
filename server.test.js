const request = require('supertest');
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("test - add user", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3000/User/add").send({
            "Name":"Umer",
            "Email":"i200784@nu.edu.pk",
            "Age":20,
            "Contact":456

        }
        )
        expect(response.statusCode).toBe(200);
    })
})

describe("test - delete user", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3000/User/delete").send({
            "id":"32434",         
    })
        expect(response.statusCode).toBe(200);
    })
})

describe("test - has user been added? ", ()=> {
    test(" POST ", ()=>{
        const response = request(app).post("http://localhost:3000/User/add").send({
            "Name":"umer",         
    })
        expect(response.statusCode).toBe(200);
    })
})
