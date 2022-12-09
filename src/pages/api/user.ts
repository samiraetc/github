import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export const BASE_URL = 'https://api.github.com';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { userName },
  } = await request;

  const config = {
    headers: { Authorization: `Bearer ${process.env.GITHUB_KEY}` },
  };

  try {
    const fetchUserProfile = await fetch(`${BASE_URL}/users/${userName}`, config)
      .then((res) => res.json())
      .catch((err) => err);
    const fetchUserRepositories = await fetch(`${BASE_URL}/users/${userName}/repos`, config).then((res) =>
      res.json().catch((err) => err),
    );

    return response.status(200).json({
      user: {
        name: fetchUserProfile.name,
        avatarUrl: fetchUserProfile.avatar_url,
        biography: fetchUserProfile.bio,
      },
      repositories: fetchUserRepositories.map((item: any) => {
        const repositoriesFiltered = {
          id: item.id,
          name: item.name,
          language: item.language,
          type: item.visibility,
          description: item.description,
          updated: item.updated_at,
        };

        return repositoriesFiltered;
      }),
    });
  } catch (err) {
    // Check if we got a useful response
    if (axios.isAxiosError(err)) {
      if (err.response && err.response.status === 404) {
        // Return 404 error
        response.status(404).json({ err: 'Unable to find device' });
      }
    } else {
      // Return 500 error
      response.status(500).json({ err: 'Failed to fetch Gateway data' });
    }
  }
};
