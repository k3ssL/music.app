import { Controller, Get } from "@nestjs/common"

@Controller("/tracks")
export class TrackController {
    create() {}

    @Get()
    getAll() {}

    getOne() {}

    delete() {}
}
