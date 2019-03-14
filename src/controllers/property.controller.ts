import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Property} from '../models';
import {PropertyRepository} from '../repositories';

export class PropertyController {
  constructor(
    @repository(PropertyRepository)
    public propertyRepository : PropertyRepository,
  ) {}

  @post('/properties', {
    responses: {
      '200': {
        description: 'Property model instance',
        content: {'application/json': {schema: {'x-ts-type': Property}}},
      },
    },
  })
  async create(@requestBody() property: Property): Promise<Property> {
    return await this.propertyRepository.create(property);
  }

  @get('/properties/count', {
    responses: {
      '200': {
        description: 'Property model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Property)) where?: Where,
  ): Promise<Count> {
    return await this.propertyRepository.count(where);
  }

  @get('/properties', {
    responses: {
      '200': {
        description: 'Array of Property model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Property}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Property)) filter?: Filter,
  ): Promise<Property[]> {
    return await this.propertyRepository.find(filter);
  }

  @patch('/properties', {
    responses: {
      '200': {
        description: 'Property PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() property: Property,
    @param.query.object('where', getWhereSchemaFor(Property)) where?: Where,
  ): Promise<Count> {
    return await this.propertyRepository.updateAll(property, where);
  }

  @get('/properties/{id}', {
    responses: {
      '200': {
        description: 'Property model instance',
        content: {'application/json': {schema: {'x-ts-type': Property}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Property> {
    return await this.propertyRepository.findById(id);
  }

  @patch('/properties/{id}', {
    responses: {
      '204': {
        description: 'Property PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() property: Property,
  ): Promise<void> {
    await this.propertyRepository.updateById(id, property);
  }

  @put('/properties/{id}', {
    responses: {
      '204': {
        description: 'Property PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() property: Property,
  ): Promise<void> {
    await this.propertyRepository.replaceById(id, property);
  }

  @del('/properties/{id}', {
    responses: {
      '204': {
        description: 'Property DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertyRepository.deleteById(id);
  }
}
