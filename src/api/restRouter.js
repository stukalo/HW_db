import express from 'express';
import { userRouter } from './resources/user';
import { stepRouter } from './resources/step';
import { recipeRouter } from './resources/recipe';

export const restRouter = express.Router();

restRouter.use('/user', userRouter);
restRouter.use('/step', stepRouter);
restRouter.use('/recipe', recipeRouter);