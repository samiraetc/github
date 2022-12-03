// import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export const BASE_URL = 'https://api.github.com';

//request: NextApiRequest;

export default (req: NextApiRequest, response: NextApiResponse) => {
  console.log(req);
  response.status(200).json({
    login: 'samiraetc',
    id: 22984504,
    node_id: 'MDQ6VXNlcjIyOTg0NTA0',
    avatar_url: 'https://avatars.githubusercontent.com/u/22984504?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/samiraetc',
    html_url: 'https://github.com/samiraetc',
    followers_url: 'https://api.github.com/users/samiraetc/followers',
    following_url: 'https://api.github.com/users/samiraetc/following{/other_user}',
    gists_url: 'https://api.github.com/users/samiraetc/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/samiraetc/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/samiraetc/subscriptions',
    organizations_url: 'https://api.github.com/users/samiraetc/orgs',
    repos_url: 'https://api.github.com/users/samiraetc/repos',
    events_url: 'https://api.github.com/users/samiraetc/events{/privacy}',
    received_events_url: 'https://api.github.com/users/samiraetc/received_events',
    type: 'User',
    site_admin: false,
    name: 'Samira Costa',
    company: 'Mercado Livre',
    blog: '',
    location: 'Campinas, São Paulo',
    email: null,
    hireable: null,
    bio: 'Frontend Developer on @MercadoLivre',
    twitter_username: null,
    public_repos: 23,
    public_gists: 0,
    followers: 22,
    following: 4,
    created_at: '2016-10-21T15:32:48Z',
    updated_at: '2022-12-01T21:59:46Z',
  });
  // return axios.get(`${BASE_URL}/users/${userName}`).then((res) => response.status(200).json(res.data));
};
