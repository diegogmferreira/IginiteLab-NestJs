import { SendNotification } from "./send-notification";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification', 
      category: 'Social', 
      recipientId: 'example-recipient-id'
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  })
})  