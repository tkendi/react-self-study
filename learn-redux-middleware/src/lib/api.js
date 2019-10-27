import axios from 'axios';

export const getPost = id => 
<<<<<<< HEAD
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id =>
    axios.get(`https://jsonplaceholder.typicode/users`);
=======
    axios.get(`https://jsonplaceholder.typicode.com.posts/:${id}`);

export const getUsers = id => {
    axios.get(`https://jsonplaceholder.typicode.com/users`);
}
>>>>>>> 3dd7a1be6e4285c5b174b04dff6aadd9803d322c
