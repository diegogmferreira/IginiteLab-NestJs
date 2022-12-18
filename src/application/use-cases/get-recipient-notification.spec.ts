import { Notification } from '@application/entities/notification'
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";
import { Content } from "@application/entities/content";
import { CountRecipientNotification } from "./count-recipient-notification";
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getNotification = new GetRecipientNotification(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' })
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' })
    );

    const { notificationsList } = await getNotification.execute({ recipientId: 'example-recipient-1' });

    expect(notificationsList).toHaveLength(2);
    expect(notificationsList).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'example-recipient-1' }),
      expect.objectContaining({ recipientId: 'example-recipient-1' }),
    ]))
  });
})  