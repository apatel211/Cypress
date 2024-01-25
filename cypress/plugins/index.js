/// <reference types="cypress" />

const readXLsx = require('./read-xlsx')

module.exports =(on, config) =>{
    on('task', {
        'readXlsx': readXLsx.read
    })
}