import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { createAgent } from '@forestadmin/agent';
// import { createSqlDataSource } from '@forestadmin/datasource-sql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Blog  ')
    .setDescription('Blog API description')
    .setVersion('1.0')
    .addTag('blog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // const agent = createAgent({
  //   authSecret: process.env.FOREST_AUTH_SECRET,
  //   envSecret: process.env.FOREST_ENV_SECRET,
  //   isProduction: process.env.NODE_ENV === 'production',
  //   typingsPath: './typings.ts',
  //   typingsMaxDepth: 5,
  // }).addDataSource(createSqlDataSource(process.env.DATABASE_URL));

  // await agent.mountOnNestJs(app).start();

  await app.listen(3000);
}
bootstrap();
