import { MockedProviderProps } from './types'
import ApolloClient from 'apollo-client'
import { MockLink } from './mockLink'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const createMockClient = ({
  mocks,
  addTypename,
  defaultOptions,
  cache,
  resolvers,
  link,
}: MockedProviderProps): ApolloClient<any> =>
  new ApolloClient({
    cache: cache || new InMemoryCache({ addTypename }),
    defaultOptions,
    link: link || new MockLink(mocks || [], addTypename),
    resolvers,
  })
