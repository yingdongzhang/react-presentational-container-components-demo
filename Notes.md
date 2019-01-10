# Presentational Contrainer Components Demo

## myapp-nodejs (backend)
```
cd myapp-nodejs
node index.js
```

## my-app (non redux version)
```
cd my-app
yarn install
yarn start
```

## my-app-redux (redux version)
```
cd my-app-redux
yarn install
yarn start
```

### Presentational Components
* only care about how things look
* receive data and callbacks exclusively via props
* are simple and small

### Container Components
* care about how things work, i.e. fetching and posting data
* usually don't have any markup and styles
* provide data and callbacks to other components

### Benefits
* separation of concerns
* reusability
* typechecking with PropTypes
* take advantange of storybook
* force yourself to be better at organising your components
