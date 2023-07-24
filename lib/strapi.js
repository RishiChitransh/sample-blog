import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
	url: "http://127.0.0.1:1337/api"
});

export default strapi;