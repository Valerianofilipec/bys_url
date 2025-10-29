
# BYS URL - URL Shortener

A simple and efficient URL shortening service.

## Overview

BYS URL is a URL shortener that allows you to create short, memorable links from long URLs. Based on [Bitly](https://bitly.com/)



## Documentation

[click here!](https://miro.com/app/board/uXjVJy5Bw3c=/?share_link_id=892138841039)


## Run Locally

Clone the project

```bash
  git clone https://github.com/valerianofilipec/bys_url
```

Go to the project directory

```bash
  cd bys_url
```

Run docker-compose

```bash
  docker compose up
```

Test the app by using an API Client (Postman, Insomnia, Bruno, curl)
```bash
  #To Post long_url:
  curl --json '{"url":"https://valerianofc.codes"}' http://localhost:3333/

  #To Get shorted_url:
  curl  http://localhost:3333/xxxxxx
```


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?



## Authors

- [@BALERIVN ](https://www.github.com/valerianofilipec)<🐉⚖️/> The Apex of Backend: Ancient Power, Modern Code.
- [@BYS](https://www.github.com/bysdigital)🖱️ - Code dreams into reality
