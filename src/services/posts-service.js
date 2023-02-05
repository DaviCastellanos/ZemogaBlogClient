import { AxiosHandler } from './axios-handler';

const postsHandler = new AxiosHandler();

export default {
  async getPublishedPosts() {
    const response = await postsHandler.getRequest("https://zemogablogapi.azurewebsites.net/api/v1/GetPostsByStatus?status=Published");
    return response
  }
}