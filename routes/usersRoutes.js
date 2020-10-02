import { Router } from 'express';

const router = Router();

router
  .get('/', (req, res) => {
    res.send('Users');
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User ${id}`);
  })
  .get('/create', (req, res) => {
    res.send('Create User');
  });

export default router;
