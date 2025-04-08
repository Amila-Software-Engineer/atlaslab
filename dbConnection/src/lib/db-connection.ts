import mysql, { Connection, ConnectionOptions } from 'mysql2';



let mysqlconnection: Connection;




export const mysqlDbConnection = (config: ConnectionOptions) => {
  mysqlconnection = mysql.createConnection(config);

  mysqlconnection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      process.exit(1);
    }
    console.log('Connected to the database as ID', mysqlconnection.threadId);
  });

  return mysqlconnection;
};


export const mongoDbConnection = ()=>{
  
}

export const prosgresqlDbConnection = ()=>{
  
}