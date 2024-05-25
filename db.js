import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'students',
      password: 'pradip2004',
      port: 5432,
})

export default db;