import { Service } from 'typedi';
import Email from 'email-templates';
import path from 'path';

@Service()
class EmailService {
  /**
   *
   * @param template:string email template name
   * @param data:object data object to replace dynamic values in email template
   * @param to:string where to send email
   * @returns Promise<object>
   */
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
      template: `${path.resolve('src')}/emails/${template}`, // email templates which are placed in separate folder
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
