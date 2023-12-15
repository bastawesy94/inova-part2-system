import { Router } from 'express';
import User from '../models/User';
const router = Router();
router.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  router.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      console.log("user added: ",user);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  router.put('/users/:id', async (req, res) => {
    try {
      const user = await User.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  router.delete('/users/:id', async (req, res) => {
    try {
      await User.destroy({
        where: { id: req.params.id },
      });
      res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  export default router;
