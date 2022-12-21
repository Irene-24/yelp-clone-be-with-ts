import createApp from "./app";
import config from "./config";
import loaders from "./loaders";

const app = createApp();

loaders({ expressApp: app });

app
  .listen(config.port, () => {
    console.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
