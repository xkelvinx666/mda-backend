import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './postgre.datasource.json';

export class PostgreDataSource extends juggler.DataSource {
  static dataSourceName = 'Postgre';

  constructor(
    @inject('datasources.config.Postgre', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
