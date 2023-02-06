import { AxiosHandler } from './axios-handler';

const commentsHandler = new AxiosHandler();

export default {
  async getPostCommentsWithoutReviews(id) {
    const response = await commentsHandler.getRequest("https://zemogablogapi.azurewebsites.net/api/v1/GetCommentsByPostId?postId=" + id + "&includeReviews=false");
    return response
  },
  async createNewComment(payload)
  {
    const response = await commentsHandler.postRequest("https://zemogablogapi.azurewebsites.net/api/v1/CreateNewComment", payload);
    return response
  }
}