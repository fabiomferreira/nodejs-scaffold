import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL || 'localhost:5432';
const pgUser = process.env.PGUSER || 'postgress';
const pgPassword = process.env.PGPASSWORD || 'postgress';

const sequelize = new Sequelize(`postgres://${pgUser}:${pgPassword}@${databaseUrl}/nodejs-scaffold`);

sequelize.sync();

export {
  sequelize,
};
