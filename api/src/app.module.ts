import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { InformationModule } from "./information/information.module";
import { CompanyModule } from "./company/company.module";
import { BoatModule } from "./boat/boat.module";
import { BookingCalendarModule } from "./booking-calendar/booking-calendar.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "corsiboat",
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
    }),

    UserModule,
    InformationModule,
    CompanyModule,
    BoatModule,
    BookingCalendarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
