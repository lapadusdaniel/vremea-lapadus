import React from "react";
import "./Informatii.css";

export default function Informatii() {
  return (
    <div>
      <h2>Informații în caz de urgență</h2>
      <p>
        Situațiile de urgență pot apărea în orice moment. E important să fim informați și
        pregătiți pentru a acționa corect.
      </p>

      <h4>1. Furtună și vijelie</h4>
      <ul>
        <li><strong>Înainte de furtună:</strong> Verifică prognoza meteo și asigură-te că ai un loc sigur.</li>
        <li><strong>În timpul furtunii:</strong> Evită spațiile deschise și închide ferestrele.</li>
        <li><strong>După furtună:</strong> Verifică daunele și evită cablurile electrice căzute.</li>
      </ul>

      <h4>2. Inundații</h4>
      <ul>
        <li><strong>Înainte de inundație:</strong> Pregătește o trusă de urgență.</li>
        <li><strong>În timpul inundației:</strong> Evită zonele cu apă puternic curgătoare.</li>
        <li><strong>După inundație:</strong> Verifică structura casei și evită consumul apei de la robinet.</li>
      </ul>

      <h4>3. Cutremur</h4>
      <ul>
        <li><strong>Înainte:</strong> Identifică locuri sigure și fixează obiectele grele.</li>
        <li><strong>În timpul:</strong> Adăpostește-te sub o masă solidă și protejează-ți capul.</li>
        <li><strong>După:</strong> Evită scurgerile de gaz și ajută alte persoane.</li>
      </ul>

      <h4>4. Caniculă</h4>
      <ul>
        <li><strong>Înainte:</strong> Planifică un loc răcoros și hidratează-te.</li>
        <li><strong>În timpul:</strong> Evită expunerea la soare și bea apă.</li>
        <li><strong>După:</strong> Monitorizează sănătatea celor vulnerabili.</li>
      </ul>

      <h4>5. Alte situații</h4>
      <ul>
        <li><strong>Incendii:</strong> Ai un stingător la îndemână și sună la 112.</li>
        <li><strong>Alunecări de teren:</strong> Urmărește semnele și evacuează zona dacă e necesar.</li>
      </ul>

      <p>
        Pentru mai multe informații, urmărește anunțurile autorităților și consultă ghidurile
        oficiale privind siguranța.
      </p>
    </div>
  );
}