import { ArgumentMetadata, PipeTransform, BadRequestException } from "@nestjs/common";

export class ValidationPaginationPipe implements PipeTransform {
    constructor(private defaultPage: number = 1, private defaultLimit: number = 10) { }

    transform(value: any, metadata: ArgumentMetadata) {
        if (!value?.pagination) {
            value.pagination = { page: this.defaultPage, limit: this.defaultLimit }
        }

        if (value.pagination.page && value.pagination.page < 1) {
            throw new BadRequestException('Page must be greater than or equal to 1');
        }

        if (value.pagination.limit && (value.pagination.limit < 1 || value.pagination.limit > 100)) {
            throw new BadRequestException('Limit must be between 1 and 100');
        }
        
        return value;
    }
}