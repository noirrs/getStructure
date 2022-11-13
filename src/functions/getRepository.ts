import { FileResponse } from "./../types/types.d";
import fetch from "node-fetch";
const axios = require("axios")

export async function getRepository(
  username: string,
  repository: string,
  branch: string = "master"
): Promise<FileResponse> {
   

  return axios.get(`https://api.github.com/repos/${username}/${repository}/git/trees/${branch}?recursive=1`)
    .then((data) => {
      return data.data
    });


}
