# Starter Blog Sample (Strapi + Next.JS)
A sample blog using Strapi + Next.JS. 
## Instructions for Front End:
- Clone the repo.
- Run "npm install"
- Once complete, Run "npm run dev" to start the dev server at http://localhost:3000

## Instructions for Strapi (CMS)
- Get basic Strapi setup (https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)
- Follow only "Part A"
- "cd" into your strapi project folder
- Stop the server if running
- Copy the file "blog-strapi-export.tar.gz.enc" into you strapi project folder
- Run the following command: "npm run strapi import -- -f blog-strapi-export.tar.gz.enc --key 123456"
- Start  your strapi server - npm run develop
- You should be able to see entities & collection types

## Go to the UI - http://localhost:3000 - You should be able to see the blog.
