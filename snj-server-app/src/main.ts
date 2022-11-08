import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig as AppConfigService } from './config/app.config';

async function bootstrap() {
  const configInstance = new AppConfigService({ mode: 'DEBUG' });
  const config = configInstance.Get();
  const app = await NestFactory.create(AppModule);

  const crossDomainOptions = {
    origin: [
      `${config['ServerAppUrl']}:${config['ServerPort']}`,
      `${config['ClientAppUrl']}:${config['ClientPort']}`,
      ...(config['SameNameHosts'] || [])
    ],
    methods: ["GET", "POST"],
    credentials: true,
  };
  console.log({ crossDomainOptions });
  app.enableCors(crossDomainOptions);

  await app.listen(config['ServerPort']);
}

bootstrap();
console.log('SNJ_SPA started...');