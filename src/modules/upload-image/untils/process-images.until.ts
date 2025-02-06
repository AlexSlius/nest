import { BadRequestException } from '@nestjs/common';
import { FileUpload } from 'graphql-upload-ts';
import { v4 as uuidv4 } from 'uuid';
import { createWriteStream } from 'fs';
import * as path from 'path';

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE: number = 5 * 1024 * 1024;


const fileSize = async (file): Promise<number> => {
    const { createReadStream } = file;

    return new Promise((resolve, reject) => {
        const stream = createReadStream();

        let totalBytes = 0;

        stream.on('data', (chunk) => {
            totalBytes += chunk.length;
        })

        stream.on('end', () => resolve(totalBytes))
        stream.on('error', reject);
    });
}

export const processImage = async (images: FileUpload[]): Promise<string[]> => {
    try {
        const resolvedImages = await Promise.all(images);

        await Promise.all(
            resolvedImages.map(async (file) => {
                const currentFileSize = await fileSize(file);

                if (MAX_FILE_SIZE < currentFileSize) {
                    throw new BadRequestException(`Any file larger then 5MB`);
                }

                if (!ALLOWED_TYPES.includes(file.mimetype)) {
                    throw new BadRequestException(`The File ${file.filename} has an invalid format`);
                }
            })
        )

        const urlFiles = await Promise.all(
            resolvedImages.map(async (file) => {
                const { createReadStream, filename } = file;

                const fileExtension = path.extname(filename);
                const nameFileUuid = `${uuidv4()}${fileExtension}`;
                const savePath = path.join(process.cwd(), process.env.FOLDER_UPLOADS, nameFileUuid);

                try {
                    await new Promise((resolve, reject) => {
                        const stream = createReadStream();
                        const writeStream = createWriteStream(savePath);

                        stream.pipe(writeStream);
                        writeStream.on('finish', resolve);
                        writeStream.on('error', reject);
                    });

                    return nameFileUuid;
                } catch (error) {
                    return error;
                }
            })
        );

        return urlFiles;
    } catch (error) {
        return error
    }
}
