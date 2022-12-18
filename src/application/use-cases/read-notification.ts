import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor( private notifcationRepository: NotificationRepository) {}

  async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notifcationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notifcationRepository.save(notification)
  }
}