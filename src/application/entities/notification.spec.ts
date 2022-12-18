import { Content } from "./content"
import { Notification } from "./notification";


describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('Voce recebeu uma nova solicitacao'),
      category: 'Social',
      recipientId: 'example-recipient-id',
    });
  
    expect(notification).toBeTruthy();
  });
})