# This api consumes:
https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1

# With variables
https://api.github.com/search/repositories?q=language:${lang}&sort=${sort}&page=${page}

# How to Use:
```
yarn
yarn dev (with nodemon) OR
yarn start
```

# How to consume:
```
Simple Welcome Page
http://localhost:3001/

Searching by Java
http://localhost:3001/search?lang=java

Searching by Java and Sorting by Stars
http://localhost:3001/search?lang=java&sort=stars

Searching by Java and Pagination
http://localhost:3001/search?lang=java&page=2

Searching by Java and Sorting by Stars and pagination
http://localhost:3001/search?lang=java&sort=stars&page=2
```

# TODO:
- Unit test