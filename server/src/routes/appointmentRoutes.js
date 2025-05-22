import express from 'express';
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
  updateAppointmentStatus
} from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.delete('/:id', deleteAppointment);
router.patch('/:id/status', updateAppointmentStatus); 


export default router;
