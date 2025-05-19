import axios from "axios";
import { ImageData } from "./types/ImageData";

const apiKey = "Ud4YJgNphxLzVWMXKSbOYiBwSTEIqFbfAwdnpOzV7M4";

axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchGalleryResponse {
  query: ImageData[];
  totalPages: number;
}

export const fetchGalleryWithPhoto = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<FetchGalleryResponse> => {
  const response = await axios.get(
    `/search/photos/?client_id=${apiKey}&per_page=20&query=${query}&page=${page}`,
    { signal }
  );

  return {
    query: response.data.results as ImageData[],
    totalPages: response.data.total_pages,
  };
};
