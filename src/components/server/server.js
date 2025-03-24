const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tuemail@gmail.com", // Reemplázalo con tu email
        pass: "tupassword" // Usa una App Password si usas Gmail
    }
});

app.post("/reservar", async (req, res) => {
    const { nombre, email, fecha, hora, personas } = req.body;

    const mailOptions = {
        from: "tuemail@gmail.com",
        to: "destinatario@gmail.com", // A dónde quieres recibir las reservas
        subject: "Nueva Reserva de Mesa",
        text: `Reserva a nombre de ${nombre} (${email}) para el ${fecha} a las ${hora}, para ${personas} personas.`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Reserva enviada");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al enviar la reserva");
    }
});

app.listen(5001, () => {
    console.log("Servidor corriendo en http://localhost:5001");
});
