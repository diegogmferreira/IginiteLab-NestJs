import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor( private notifcationRepository: NotificationRepository) {}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notifcationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notifcationRepository.save(notification)
  }
}