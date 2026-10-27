import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("Home Page Is Render...");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(req.body);
  res.send({ success: true, message: "User Added Successfully" });
});

app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
