import express from 'express';
import controller from './step.controller';

export const stepRouter = express.Router({});

stepRouter.route('/')
    .get(controller.getAll);