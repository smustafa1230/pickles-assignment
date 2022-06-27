import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpException';

/**
 * validation middleware
 * @param type
 * @param value
 * @param skipMissingProperties
 * @param whitelist
 * @param forbidNonWhitelisted
 * @returns
 */
const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler => {
  return (req, res, next) => {
    validate(plainToClass(type, req[value]), { skipMissingProperties, whitelist, forbidNonWhitelisted }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        next(new HttpException(400, errors));
      } else {
        next();
      }
    });
  };
};

export default validationMiddleware;
