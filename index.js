const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

const prod = false;
console.log("lal");
app.use(express.json());
const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "API DOCS",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://JampackedKindheartedInstitutes.sayuk.repl.co",
      },
    ],
    // components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: "http",
    //       scheme: "bearer",
    //       bearerFormat: "JWT",
    //     },
    //   },
    // },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpecs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const demoRoute = require("./routes/demo.route");

app.use("/demo", demoRoute);

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.listen(3000, () => {
  console.log("server started");
});
