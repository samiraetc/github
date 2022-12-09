import { createMocks, RequestMethod } from 'node-mocks-http';

import { DEFAULT_URL } from '../../config/default';
import { NextApiRequest, NextApiResponse } from 'next';
import user from './user';

describe('search', () => {
  function mockRequestResponse(method: RequestMethod = 'GET', username: string) {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } = createMocks({
      method,
      url: `${DEFAULT_URL}/user?userName=${username}`,
    });
    req.headers = {
      Authorization: `Bearer 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`,
    };
    req.query = { userName: username };

    return { req, res };
  }

  it('should return a successful response from server side', async () => {
    const { req, res } = mockRequestResponse('GET', 'samiraetc');
    user(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });
});
