import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL || 'localhost:5432';
const pgUser = process.env.PGUSER || 'postgres';
const pgPassword = process.env.PGPASSWORD || 'postgres';
console.log(process.env)

const sequelize = new Sequelize(`postgres://${pgUser}:${pgPassword}@${databaseUrl}/nodejs-scaffold`);

sequelize.sync();

export {
  sequelize,
};
