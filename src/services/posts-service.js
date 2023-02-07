import { AxiosHandler } from './axios-handler';
import axios from 'axios'

const postsHandler = new AxiosHandler();

export default {
  async getPublishedPosts() {
    const response = await postsHandler.getRequest("https://zemogablogapi.azurewebsites.net/api/v1/GetPostsByStatus?status=Published");
    return response
  },
  async getSubmittedPosts() {
    const response = await postsHandler.getRequest("https://zemogablogapi.azurewebsites.net/api/v1/GetPostsByStatus?status=Submitted");
    return response
  },
  async getPostById(id) {
    const url = "https://zemogablogapi.azurewebsites.net/api/v1/GetPostById?postId=" + id;
    const response = await postsHandler.getRequest(url);
    return response
  },
  async getPostsByAuthor(id, roles, token) {

    var role = roles.filter(x => x=="Task.Write").toString();
    let config = {
        headers: {
          Roles: role,
          Authorization: `Bearer ${token}` 
        }
      }
    
      const url = "https://zemogablogapi.azurewebsites.net/api/v1/GetPostsByAuthor?authorId=" + id;
      //const response = await postsHandler.getRequest(url, config);
      const response = await axios.get(url, config);
      //console.log("response", response);
    return response.data
  },
  async createNewPost(payload, roles, token){

    var role = roles.filter(x => x=="Task.Write");
    let config = {
        headers: {
            Roles: role,
            Authorization: `Bearer ${token}` 
        }
    }
     
    const response = await postsHandler.postRequest("https://zemogablogapi.azurewebsites.net/api/v1/CreateNewPost", payload, config);
    return response
  },
  async updatePost(payload, roles, token){

    var role = roles.filter(x => x=="Task.Write").toString();
    //console.log("Token", token);
    let config = {
        headers: {
          Roles: role,
          Authorization: `Bearer ${token}` 
        }
      }

    const response = await axios.put("https://zemogablogapi.azurewebsites.net/api/v1/UpdatePost", payload, config);
    return response.data
  },
  async publishPost(id, roles, token){

    var role = roles.filter(x => x=="Task.Edit").toString();

    let config = {
        headers: {
            Roles: role,
            Authorization: `Bearer ${token}` 
        }
    }

    console.log("config", config);

    const url = "https://zemogablogapi.azurewebsites.net/api/v1/PublishPost?postId=" + id;

    const response = await axios.put(url, null, config);
    return response.data
  }
}