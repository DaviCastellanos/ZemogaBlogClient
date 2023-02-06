import { AxiosHandler } from './axios-handler';

const postsHandler = new AxiosHandler();

export default {
  async getPublishedPosts() {
    const response = await postsHandler.getRequest("https://zemogablogapi.azurewebsites.net/api/v1/GetPostsByStatus?status=Published");
    return response
  },
  async getPostById(id) {
    const url = "https://zemogablogapi.azurewebsites.net/api/v1/GetPostById?postId=" + id;
    const response = await postsHandler.getRequest(url);
    return response
  }
}