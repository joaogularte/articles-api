const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

let database = null;

module.exports = (app) => {
    if(!database){
        const config = app.config;
        const sequelize = new Sequelize(
            config.database, 
            config.username, 
            config.password,
            config.params 
        );
        
        database = {
            sequelize,
            Sequelize,
            models: {}
        };

        sequelize.sync().done(() => {
            return database;
        });
    }
    
    return database;
}