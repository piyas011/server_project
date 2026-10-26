import express from "express";
import cors from "cors";

const app = express();
const prot = process.env.prot || 5000;

const users = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@example.com",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@example.com",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    email: "tanvir@example.com",
  },
  {
    id: 5,
    name: "Sadia Islam",
    email: "sadia@example.com",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World ");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("data from client ", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send({
    success: true,
    message: " User added Successfully",
  });
});

app.listen(prot, () => {
  console.log(`server running port ${prot}`);
});
