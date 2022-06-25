import { Service } from 'typedi';
import Email from 'email-templates';
import path from 'path';
import { logger } from '@/utils/logger';

@Service()
class EmailService {
  constructor() {
    const message = 'hi';
    logger.info('message', message);
  }
  public async sendEmail(template: string, data: Object, to: string): Promise<any> {
    // we can get email templates from database as well and can replace required variables with values
    const email = new Email({
      message: {
        from: 'niftylettuce@gmail.com',
      },
      send: true,
      preview: false,
      transport: {
        jsonTransport: true,
      },
    });

    return email.send({
      template: `${path.resolve('src')}/emails/${template}`,
      message: {
        to,
        // can send attachemnts as well if we receive it from api consumer
        // attachments: [
        //   {
        //     filename: 'text1.txt',
        //     content: 'hello world!',
        //   },
        // ],
      },
      locals: data,
    });
  }
}
export default EmailService;
