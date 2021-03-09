import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
    //@Get()

    @MessagePattern('test')
    consumePayment(@Payload() message) {
      console.log(message.value);
    }
}
