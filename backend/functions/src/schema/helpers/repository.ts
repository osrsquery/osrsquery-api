import axios from "axios";
import { urlExists } from "./common";
import { env } from "../../config";

export function repositoryPathExists(path: string) {
  return urlExists(`${env.repository.base_url}/${path}`);
}

export async function fetchRepositoryData(path: string) {
  const { data } = await axios.get(`${env.repository.base_url}/${path}`);
  return data;
}
