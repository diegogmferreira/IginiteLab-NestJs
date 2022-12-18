import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notificationsList: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor( private notifcationRepository: NotificationRepository) {}

  async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;
    const notificationsList = await this.notifcationRepository.findManyByRecipientId(recipientId);

    return {
      notificationsList
    };
  }
}