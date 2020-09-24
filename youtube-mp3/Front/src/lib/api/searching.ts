import client from "./client";

export const search = (title: any) => client.get(`http://localhost:4000/api/search/${title}`);
