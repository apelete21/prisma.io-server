const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient();

app.use(express.json());

const port = 5000;

app.get("/", async (req, res) => {
  const allUsers = await prisma.users.findMany();
  res.json(allUsers);
});

app.post("/", async (req, res) => {
  const details = req.body;
  const newUser = await prisma.users.create({ data: details });
  res.json(newUser);
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { age } = req.body;
  const newUser = await prisma.users.update({
    where: { id: parseInt(id) },
    data: { age: age },
  });
  res.json(newUser);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const newUser = await prisma.users.delete({
    where: { id: parseInt(id) },
  });
  res.json(newUser);
});

app.post("/houses", async (req, res) => {
  const newHouse = await prisma.houses.create({ data: req.body });
  res.json(newHouse);
});

app.post("/houses/many", async (req, res) => {
  const newHouses = await prisma.houses.createMany({ data: req.body });
  res.json(newHouses);
});

app.get("/houses", async (req, res) => {
  const allHouses = await prisma.houses.findMany({
    include: {
      owner: true,
      builtBy: true,
    },
  });
  res.json(allHouses);
});

app.get("/houses/withFilters", async (req, res) => {
  const filteredHouses = await prisma.houses.findMany({
    where: {
      wifiPassword: {
        not: null,
      },
      owner: {
        age: {
          gte: 22,
        },
      },
    },
    orderBy: [
      {
        owner: {
          firstname: "desc",
        },
      },
    ],
    include: {
      owner: true,
      builtBy: true,
    },
  });
  res.json(filteredHouses);
});

app.get("/house", async (req, res) => {
  const { address } = req.body;
  const OneHouse = await prisma.houses.findUnique({
    where: {
      address,
    },
    include: {
      owner: true,
      builtBy: true,
    },
  });
  res.json(OneHouse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.
