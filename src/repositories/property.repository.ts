import {DefaultCrudRepository} from '@loopback/repository';
import {Property} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PropertyRepository extends DefaultCrudRepository<
  Property,
  typeof Property.prototype.id
> {
  constructor(
    @inject('datasources.Postgre') dataSource: PostgreDataSource,
  ) {
    super(Property, dataSource);
  }
}
