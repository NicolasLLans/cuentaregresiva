// Seleccionar el botón y el input del nuevo final de cuenta regresiva
const updateEndDateButton = document.getElementById("updateEndDateButton");
const newEndDateInput = document.getElementById("newEndDate");

// Agregar evento de escucha al botón para actualizar la fecha de finalización
updateEndDateButton.addEventListener("click", () => {
  endDate = new Date(newEndDateInput.value).getTime();
  updateCountdown();
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);