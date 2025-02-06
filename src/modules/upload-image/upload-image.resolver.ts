import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { UploadImageService } from './upload-image.service';


@Resolver(() => Boolean)
export class UploadImageResolver {
  constructor(private readonly uploadImageService: UploadImageService) { }

  @Mutation(() => [String], { name: 'uploadImage' })
  uploadImage(
    @Args({ name: 'images', type: () => [GraphQLUpload] }) images: FileUpload[],
    @Args({ name: 'folder', type: () => String, nullable: true }) folder: string
  ) {
    return this.uploadImageService.uploadImage(images, folder);
  }
}
