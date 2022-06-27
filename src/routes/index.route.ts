import 'reflect-metadata';
import Container from 'typedi';
import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import { SendEmailDto } from '@/dtos/email.dto';
import validationMiddleware from '@/middlewares/validation.middleware';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();

  //Dependency injection using typedi
  public indexController = Container.get(IndexController);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.post(`${this.path}send-email`, validationMiddleware(SendEmailDto, 'body'), this.indexController.sendEmail);
  }
}

export default IndexRoute;
