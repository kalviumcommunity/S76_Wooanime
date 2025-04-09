const bcrypt = require("bcryptjs");
const pool = require("../db"); 
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const [existing] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   
    await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res
      .status(200)
      .json({
        message: "Login successful",
        user: { id: user.id, username: user.username },
      });
        res.cookie("username", user.name, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "Lax",
          secure: false,
        });    
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signup, login };
