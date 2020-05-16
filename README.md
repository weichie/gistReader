# GistReader
Live example coming soon! (probably on following url: https://gistreader.weichie.com)

A simple Github Gist reader so you can easely find specific gists based on title or description. I don't know if many people use gist like this, but I mostly use it to store handy code snippets or to quickly share code with other people.

This project is built with NuxtJS and pulls the public data from a Github User. It is NOT possible to create new gists using this project.

## Tools & Modules
- [NuxtJS](https://nuxtjs.org/)
- [Github Gist](https://developer.github.com/v3/gists/)
- [TailwindCSS](https://tailwindcss.com/)
- `node-sass` and `sass-loader` for sass support
- `vue-code-highlight` for code highlighting ([npm package](https://www.npmjs.com/package/vue-code-highlight))


## Build Setup
```bash
# Goto directory
$ cd gistReader

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
