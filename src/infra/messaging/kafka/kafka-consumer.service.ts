import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['destined-turkey-14971-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZGVzdGluZWQtdHVya2V5LTE0OTcxJD__gFI8Uk8wuvalyDPYWRhex0p_P_ScSM4',
          password: 'FLMr4QTOzBNKIzqcSweEZUJMscR6bCYaDED4d1yMlb9NdXU_SNuUkhP6cG5gnbux8VzOVw=='
        },
        ssl: true,
      }
    })
  }

  async onModuleDestroy() {
    await this.close();
  }
}