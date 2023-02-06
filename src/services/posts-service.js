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
  },
  async createNewPost(payload, roles, token){

    var role = roles[0];
    //console.log("Token", token);
    let config = {
        headers: {
          Roles: role,
          Authorization: `Bearer ${token}` 
        }
      }

    const response = await postsHandler.postRequest("https://zemogablogapi.azurewebsites.net/api/v1/CreateNewPost", payload, config);
    return response
  }
}