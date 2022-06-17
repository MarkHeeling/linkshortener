import axiosClient from "../apiClient";

export function shortenUrl(apiKey, url) {
  return axiosClient.get(`/api.php?key=${apiKey}&short=${url}`);
}
