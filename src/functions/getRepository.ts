import { FileResponse } from './../types/types.d';

export async function getRepository(username: string, repository: string, branch: string = "master"): Promise<FileResponse> {
  return fetch(`https://api.github.com/repos/${username}/${repository}/git/trees/${branch}?recursive=1`)
    .then(response => response.json())
    .then(data => data);
}

