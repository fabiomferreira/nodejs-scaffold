import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/nodejs-scaffold'
const sequelize = new Sequelize(databaseUrl);

sequelize.sync();

export {
  sequelize,
};
