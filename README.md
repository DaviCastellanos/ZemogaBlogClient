# Zemoga Blog Engine

## System setup

The client is a vue.js static app running at: https://orange-island-018104a0f.2.azurestaticapps.net/

while the API is a .Net Core 6 function app running at: https://zemogablogapi.azurewebsites.net

There is no need to build or set up anything, just browse the client or call the API from Postman.

### Authorized accounts

Browsing the client without authentication is possible. Read previews of published posts, their details and adding comments is enabled for anybody. However, there are two specific roles with more access: Writers can create, edit and submit posts for review. Editors can do the same as writers, but also  publish submitted posts.

Two accounts with different roles are provided:

Email: zemogawriter@gmail.com
Password: Zemog@1234

Email: zemogaeditor@gmail.com
Password: Zemog@1234

Before logging into the client with the email address, open the gmail inbox of the user, an email with a code will be sent. That code is requiered to log in with the user's email address.

### API operations

GetPostsByStatus (No need for authorization)
GetPostById (No need for authorization)
GetPostsByAuthor (Writer level authorization)
CreateNewPost (Writer level authorization)
UpdatePost (Writer level authorization)
PublishPost (Editor level authorization)

CreateNewComment (No need for authorization)
GetCommentsByPostId (No need for authorization)

Further operation's details can be found on the Postman collection saved in the API repository: https://github.com/DaviCastellanos/ZemogaBlogAPI

### Time
It took about 40 hours to put this solution together. 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
