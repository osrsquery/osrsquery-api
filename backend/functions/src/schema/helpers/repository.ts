import axios from "axios";
import { urlExists } from "./common";
import { env } from "../../config";

export function repositoryPathExists(path: string) {
  return urlExists(`${env.repository.base_url}/${path}`);
}

const repositoryFileCache: Map<string, string> = new Map();

// will return a cached version if available, else will fetch new and cache
export async function fetchRepositoryData(path: string) {
  const fullPath = `${env.repository.base_url}/${path}`;
  if (repositoryFileCache.has(fullPath)) {
    return repositoryFileCache.get(fullPath);
  }

  const { data } = await axios.get(`${env.repository.base_url}/${path}`);

  repositoryFileCache.set(fullPath, data);

  return data;
}
