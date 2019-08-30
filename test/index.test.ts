import { createMockClient } from '../src'
import gql from 'graphql-tag'

describe('Client', () => {
  it('works', async () => {
    const query = gql`
      query DogName {
        dog {
          name
        }
      }
    `

    const result = {
      data: {
        dog: { name: 'Douglas' },
      },
    }

    const mocks = [
      {
        request: {
          query,
        },
        result,
      },
    ]

    const client = createMockClient({ mocks })

    const response = await client.query({
      query,
    })

    expect(response).toEqual(expect.objectContaining(result))
  })
})
