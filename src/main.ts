import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['192.168.1.173:9092'],
      },
      consumer: {
        groupId: 'my-kafka-consumer',
      }
    }
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3000);

}
bootstrap();
