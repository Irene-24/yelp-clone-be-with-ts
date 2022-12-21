# for testing routes
create a util function that creates app, loads routes and returns app

```js
const appWithRoutes = () => {
    const app = createApp();
    expressLoader({app});

    return app
}
```
