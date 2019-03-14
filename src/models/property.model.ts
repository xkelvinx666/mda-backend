import {Entity, model, property} from '@loopback/repository';

@model()
export class Property extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  scope?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isKeyword?: boolean;


  constructor(data?: Partial<Property>) {
    super(data);
  }
}
