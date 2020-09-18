import client from "./client";

export const search = (title: any) => client.get(`/search/${title}`);
