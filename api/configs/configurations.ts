export default () => ({
  port: parseInt(process.env.PORT, 10) || 3100,
  database: {
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
  },
});
