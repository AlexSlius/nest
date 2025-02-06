import { Injectable } from '@nestjs/common';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';

import { processImage } from './untils/process-images.until';

@Injectable()
export class UploadImageService {
    async uploadImage(images: FileUpload[], folder: string | undefined): Promise<string[]> {
        const pictureLinks = await processImage(images);
        return pictureLinks;
    }
}
