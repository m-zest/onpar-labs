import React from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/User.js";
import { PostList } from "./components/Post.js";
import { PostEdit } from "./components/EditPost.js";
import { PostCreate } from "./components/CreatePost";
import { Dashboard } from "./components/DashBoard.js";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
  </Admin>
)

export default App;
