import * as express from 'express';
import UserController from '../controller/UserController';

const router = express.Router();

const controller = new UserController();

router.get('/', (req, res) => {
  controller
    .fetchAll()
    .then(((users) => {
      res.send(users);
    }));
});

router.get('/:id', (req, res) => {
  controller
    .fetchOneById(req.params.id)
    .then((users) => res.send(users));
});

router.post('/', (req, res) => {
  controller
    .save(req.body)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post('/auth', (req, res) => {
  controller
    .auth(req.body)
    .then((user) => res.send(user))
    .catch((error) => res.send(error))
})

router.put('/:id', (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((users) => res.send(users));
});

export default router;