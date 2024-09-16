import { Module } from "@nestjs/common"
import { TrackModule } from "./track/track.module"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            entities: [],
            synchronize: true,
        }),
        TrackModule,
    ],
})
export class AppModule {}
