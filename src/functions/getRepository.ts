import { FileResponse } from "./../types/types.d";
import fetch from "node-fetch";
export async function getRepository(
  username: string,
  repository: string,
  branch: string = "master"
): Promise<FileResponse> {
   
  let response:any = fetch(`https://api.github.com/repos/${username}/${repository}/git/trees/${branch}?recursive=1`)
    .then((response) => response.json())
    .then((data) => data);

  return response;
}
