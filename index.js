const Koa = require("koa");
const router = require("koa-router");
const body = require("koa-body");
const Pug = require("koa-pug");
const serve = require("koa-static");
const webpush = require("web-push");
const path = require("path");
const cors = require("@koa/cors");

require("dotenv").config();

// webpush config ======
const vapidDetails = {
  email: process.env.EMAIL,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};

webpush.setVapidDetails(
  `mailto:${vapidDetails.email}`,
  vapidDetails.publicKey,
  vapidDetails.privateKey
);

// SERVER ======
const app = new Koa();

app.use(body());
app.use(cors());

const pug = new Pug({
  viewPath: path.resolve(__dirname, "./views"),
  basedir: "./views",
  app: app,
});

app.use(serve("assets"));

// Routes ==========
const _router = router();

_router.get("/", async (ctx) => {
  return ctx.render("index");
});

const subscriptions = []; // DB < ==== 

// ===> Subscribe handler;
_router.post("/subscribe", async (ctx) => {
  const { sub } = ctx.request.body;
  try {
    subscriptions.push(sub);
  } catch (e) {
    console.log(e);
  }

  ctx.body = "ok";
});

/// ===> index handler
_router.post("/", async (ctx) => {
  const { title, body } = ctx.request.body;

  try {
    subscriptions.forEach((subItem) => {
      webpush.sendNotification(subItem, JSON.stringify({ title, body }));
    });
  } catch (e) {
    console.log(e);
  }

  return ctx.render("index");
});

app.use(_router.routes());

app.listen(8080, () => {
  console.log("listening to: " + 8080);
});
