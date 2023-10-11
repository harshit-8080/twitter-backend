import { initServer } from "./app";

async function init() {
  const app = await initServer();

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
}

init();
