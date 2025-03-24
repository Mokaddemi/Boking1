document.getElementById("reserva-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        personas: document.getElementById("personas").value
    };

    try {
        const response = await fetch("http://localhost:5001/reservar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Reserva enviada con éxito.");
        } else {
            alert("Error en la reserva.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar al servidor.");
    }
});
