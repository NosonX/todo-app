import { Router } from 'express';

const router = Router();

router
  .get('/', (req, res) => {
    res.send('Tasks');
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Task ${id}`);
  })
  .get('/create', (req, res) => {
    res.send('Create Task');
  });

export default router;
