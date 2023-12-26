/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./orderRoutes'));
router.use(require('./noteRoutes'));
router.use(require('./CustomerRoutes'));
router.use(require('./Appointment_scheduleRoutes'));
router.use(require('./CommentRoutes'));
router.use(require('./userRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
