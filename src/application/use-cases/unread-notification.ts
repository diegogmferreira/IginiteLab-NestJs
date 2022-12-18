import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor( private notifcationRepository: NotificationRepository) {}

  async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notifcationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notifcationRepository.save(notification)
  }
}