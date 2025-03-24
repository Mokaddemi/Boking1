import { useState } from "react";

function ReservaForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        fecha: "",
        hora: "",
        personas: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/reserva", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
            <input type="date" name="fecha" onChange={handleChange} required />
            <input type="time" name="hora" onChange={handleChange} required />
            <input type="number" name="personas" min="1" onChange={handleChange} required />
            <button type="submit">Reservar</button>
        </form>
    );
}

export default ReservaForm;
