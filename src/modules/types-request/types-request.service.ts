import { Injectable } from '@nestjs/common';
import typesOfRequest from "../../data/types-of-request";
import { InterfaceTypeOfRequest } from "../../interfaces/interface-type-request.interface";

@Injectable()
export class TypesRequestService {
    findAll(): InterfaceTypeOfRequest[] {
        return typesOfRequest;
    }
}
