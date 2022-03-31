import { Injectable } from '@angular/core';
import {CustomerApiModel} from '../models/customer.model';

@Injectable()
export class TransformService {

  constructor() { }

  public uiToApiTransform(data: CustomerApiModel): CustomerApiModel{
    return data;
  }
}
