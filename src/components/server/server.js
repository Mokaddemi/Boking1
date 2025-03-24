require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail", // Puedes cambiarlo según el proveedor de correo
  auth: {
    user: process.env.EMAIL_USER, // Tu correo
    pass: process.env.EMAIL_PASS, // Tu contraseña o app password
  },
});

// Ruta para recibir la reserva y enviar correo
app.post("/api/reservar", async (req, res) => {
  const { nombre, email, fecha, hora, personas } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Se envía al usuario que hizo la reserva
    subject: "Confirmación de Reserva",
    text: `Hola ${nombre}, tu reserva ha sido confirmada para el ${fecha} a las ${hora} para ${personas} personas.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    res.status(500).json({ message: "Error enviando el correo" });
  }
});

app.listen(5000, () => console.log("Servidor corriendo en el puerto 5000"));
