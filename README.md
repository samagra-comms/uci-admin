# UCI Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Environment
* **NG_APP_url:** API base URL 
* **NG_APP_nl_login_url:** NL backend API URL  
* **NG_APP_login_token:** Token for backend authorisation 
* **NG_APP_application_id:** NL login application id 
* **NG_APP_blobUrl:** Sample file download base URL
* **NG_APP_botPhoneNumber:** Bot's Whatsapp number
* **NG_APP_nl_adapterId:** Conversation bot adapter id
* **NG_APP_nl_broadcastAdapterId:**  Brodacast bot adapter id
* **NG_APP_nl_userId:** User id for UCI admin
* **NG_APP_nl_orgId:** Org id for UCI admin
* **NG_APP_token:** Token for UCI admin


# Run as a Docker Container

* Install Docker and Docker Compose 

```
    docker-compose up -d --build
```

An optimized production build is made and served through nginx. 
