module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77596b2ff71e8394a10fde6e82f2a512'),
  },
});
