const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/reservar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error enviando la reserva:", error);
      alert("Error enviando la reserva");
    }
  };
  