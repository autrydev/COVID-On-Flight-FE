# COVID on Flight Front-End

Keeping airline employees and travelers safer through data

## Introduction

By connecting flights to users and users to COVID-19 statuses, Covid on Flight is able to track potential COVID-19 infections due to airline travel.
Granting passengers awareness of possible exposure through phone and email allows them to take proper steps to protect those around them.
Status reminder updates and infection alerts facilitate Covid on Flight in this manner.
This GitHub repository is the Front-End side to COVID on Flight.

## Project Setup

### Check that you have the proper version of VueJS installed:
```
> vue --version
```
```
@vue/cli 4.5.8
```
### After opening the repository run the following command to update all NPM Packages:
```
> npm install
```

## Developing the Code

### Environment Variables
The file ```.evn.development``` contains the environment variable ```VUE_APP_BASE_URL=```. This should be changed the development environment url for the Covid-On-Flight-BE.

### Compiles and hot-reloads for development
```
> npm run serve
```

## Preparation for Production

### Environment Variables
The file ```.evn.production``` contains the environment variable ```VUE_APP_BASE_URL=```. This should be changed the production environment url for the Covid-On-Flight-BE.

### Compiles and minifies for production
```
> npm run build
```

### Lints and fixes files
```
> npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
