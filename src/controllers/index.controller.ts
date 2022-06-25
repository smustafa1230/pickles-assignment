import { Service } from 'typedi';
import { SendEmailDto } from '@dtos/email.dto';
import { NextFunction, Request, Response } from 'express';
import EmailService from '@services/email.service';
import { logger } from '@/utils/logger';

@Service()
class IndexController {
  constructor(private readonly emailService: EmailService) {}

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
  public sendEmail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const body: SendEmailDto = req.body;
      logger.info('hiii', req);

      const emailStatus = await this.emailService.sendEmail(body.templateName, body.data, body.sendTo);
      logger.info('emailstatus', emailStatus);
      if (emailStatus.messageId) {
        return res.json({ emailStatus });
      }
      throw new Error('There is some error, please try again later.');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
