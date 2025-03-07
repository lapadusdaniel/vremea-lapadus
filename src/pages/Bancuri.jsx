import React, { useState } from "react";
import "./Bancuri.css";

function Bancuri() {
  const [currentJoke, setCurrentJoke] = useState("");
  const [showMovingText, setShowMovingText] = useState(false);

  
  const jokes = [
    "Am întrebat vremea: „De ce ești atât de schimbătoare?” Mi-a răspuns: „Sunt în toate anotimpurile mele!”",
    "Când e cea mai bună vreme pentru a culege mere? Oricând nu plouă cu grindină!",
    "Ce i-a spus norul soarelui? „Te ascund doar pentru puțin, să se mai răcorească oamenii!”",
    "Meteorologul: singurul job unde poți greși în fiecare zi și totuși să ai salariu.",
    "Dacă afară plouă și spui că-i soare, e doar o glumă meteo… tot plouă rămâne!",
    "De ce poartă soarele ochelari de soare? Ca să nu îl orbească propriile raze!",
    "Cine e mereu în formă atunci când vremea se schimbă? Vântul — că are mereu viteze diferite!",
    "Ce face ninsoarea când obosește? Se așază la sol… și devine zăpadă!",
    "Cum saluți un fulger? „Salut, Flash!”",
    "De ce nu îi place ploii să meargă la petreceri? Pentru că o pun mereu pe pauză — „Stop ploaie!”",
    "Care e semnul preferat al meteorologilor? Paranteza de vânt — se deschide și se închide mereu!",
    "Ce spune un meteorolog când îl întrebi ce face? „Prognozesc un viitor noros, dar mă simt bine!”",
    "Ce zice un fulg de zăpadă când aterizează pe nasul cuiva? „Ups, scuze de îngheț!”",
    "Ce face un om când plouă torențial? Își caută umbrela… sau un acoperiș cu Wi-Fi!",
    "De ce nu participă furtuna la concursuri de alergare? E deja prea rapidă și face ravagii!",
    "Care e mâncarea preferată a vântului? Frunze… pentru că le tot ia prin surprindere!",
    "Dacă tuna și fulgera la o petrecere, e clar — se cheamă discotecă meteorologică!",
    "De ce soarele nu se plictisește niciodată? Pentru că e mereu în mișcare, răsare și apune!",
    "Cine e mereu tristă în zilele cu soare? Umbrela, pentru că nimeni nu o bagă în seamă.",
    "Ce i-a spus o ploaie altei ploi? „Ne vedem la sol, să formăm bălți!”",
    "De ce e furtuna furioasă? Pentru că nu are unde să-și descarce nervii în liniște!",
    "Cum se numește un om care iubește ploaia? Un pluviofil… sau, mai simplu, un prieten al norilor!",
    "Ce i-a zis ceața vântului? „Hai să fim împreună să derutăm șoferii!”",
    "De ce norii nu merg la cinema? Pentru că se împrăștie când vine vântul și nu mai pot vedea nimic!",
    "Care e cel mai sociabil fenomen meteo? Curcubeul, pentru că apare de fiecare dată când ploaia se întâlnește cu soarele!",
    "De ce poartă furtuna pantofi sport? Ca să facă gălăgie când vine!",
    "Cum îți dai seama că e prea cald afară? Când umbrela de soare îți spune că vrea și ea o pauză la umbră!",
    "Ce spune meteorologul când iese la pensie? „Vremea mea s-a dus, dar tot prognozez zile senine!”",
    "Cum se ceartă două furtuni? Cu tunete și fulgere, până se transformă într-o ploaie obișnuită.",
    "Care e salutul preferat al fulgilor de zăpadă? „Cade, cade, dar salut!”",
    "De ce nu cântă soarele? Pentru că ar produce raze care ar sparge toate ferestrele!",
    "Ce își dorește ceața? Să fie mai transparentă, ca să nu i se mai spună „enervantă”! ",
    "De ce ziua e mai veselă decât noaptea? Pentru că soarele încălzește orice suflet înfrigurat!",
    "Care e cel mai curajos fenomen meteo? Furtuna de vară, pentru că vine repede și pleacă la fel de repede!",
    "Ce spune ploaia când cade? „Auuu, mă lovesc de asfalt!”",
    "De ce un curcubeu râde mereu? Pentru că trăiește între soare și ploaie… și asta îl face fericit!",
    "Cum îți dai seama că vine iarna? Când vântul îți șoptește la ureche: „Pune fularul!”",
    "Ce face un strop de ploaie când vede un alt strop? Se salută cu un mic „pic… pic!”",
    "Care e desertul preferat al caniculei? Înghețată la soare… oricum se topește imediat!",
    "Ce a pățit fulgerul când s-a lovit de pământ? S-a încărcat cu energie și a dispărut!",
    "De ce îi place ninsorii să cadă încet? Ca să poată admira peisajul de sus!",
    "Cum dansează norii? Se rotesc unul în jurul celuilalt, până se prăbușesc în ploaie!",
    "Ce spune un termometru când trece de 35°C? „Sunt în febra verii!”",
    "De ce e vântul neliniștit? Pentru că îi place să se joace cu părul oamenilor și cu frunzele din copaci!",
    "Cum recunoști că vântul are umor? Când face frunze să danseze tangoul!",
    "De ce e ninsoarea mai delicată decât ploaia? Pentru că se așază încet, în straie albe de poveste!",
    "Ce spune un fulg de nea când cade pe limba cuiva? „Hei, mi s-a tăiat momentul!”",
    "Cum se înțelege ceața cu vântul? Mai rău, se ceartă: ceața vrea să stea, vântul vrea să o alunge!",
    "Care e muzica preferată a ploii? Un remix de picături pe acoperiș!",
    "De ce norii sunt mari visători? Pentru că mereu își schimbă forma, încercând să devină ceva nou!"
  ];

  const generateRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
    setShowMovingText(true);
  };

  return (
    <div className="bancuri-container">
      <button className="generate-joke-btn" onClick={generateRandomJoke}>
        Generează glume
      </button>
      {currentJoke && (
        <div className="joke-display">
          <p>{currentJoke}</p>
        </div>
      )}
    {showMovingText && (
      <div className="moving-text">
        BAD JOKES BAD JOKES ONLY
      </div>
    )}
    </div>
  );
}

export default Bancuri;
