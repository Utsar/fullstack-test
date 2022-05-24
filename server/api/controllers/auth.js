import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.send('this is auth endpoint');
});

export default authRouter;
