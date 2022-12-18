import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";
import { CountRecipientNotification } from "./count-recipient-notification";
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countNotification = new CountRecipientNotification(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' })
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' })
    );

    const { count } = await countNotification.execute({ recipientId: 'example-recipient-1' });

    expect(count).toEqual(2);
  });
})  