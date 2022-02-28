import axios from "axios";

export function urlExists(url: string) {
  return axios
    .head(url)
    .then(() => true)
    .catch(() => false);
}
