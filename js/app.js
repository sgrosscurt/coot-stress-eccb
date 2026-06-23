/* =========================================================================
   app.js — tab-, schuifjes- en audio-logica.
   Je hoeft dit bestand normaal niet aan te passen; pas js/config.js aan.
   ========================================================================= */

(function () {
  "use strict";

  // Eén audio-element voor de hele app; blijft loopend afspelen.
  const audio = new Audio();
  audio.loop = true;

  // Welke tab staat actief, en wat is de stand van de schuifjes per tab.
  let actieveTab = 0;
  let gestart = false; // pas na de eerste klik mag/kan audio spelen
  const state = CONFIG.responses.map(() => ({ lichtAan: false, geluidAan: false }));

  // Bouw het audiopad op uit de tab-id en de schuifjes-stand.
  function audioPad(index) {
    const id = CONFIG.responses[index].id;
    const s = state[index];
    const licht = s.lichtAan ? "aan" : "uit";
    const geluid = s.geluidAan ? "aan" : "uit";
    return `sounds/${id}/licht-${licht}_geluid-${geluid}.mp3`;
  }

  // Laad en speel het geluid dat bij de actieve tab + schuifjes hoort.
  function updateAudio() {
    if (!gestart) return;
    const pad = audioPad(actieveTab);
    // Alleen herladen als de bron echt verandert (voorkomt hapering).
    if (!audio.src.endsWith(pad)) {
      audio.src = pad;
    }
    const melding = document.getElementById(`melding-${actieveTab}`);
    if (melding) melding.textContent = "";
    audio.play().catch(function () {
      if (melding) {
        melding.textContent =
          "Geluidsbestand ontbreekt of speelt niet: " + pad;
      }
      console.warn("Kon geluid niet afspelen:", pad);
    });
  }

  // Wissel naar een andere tab.
  function kiesTab(index) {
    actieveTab = index;
    document.querySelectorAll(".tab").forEach(function (el, i) {
      const actief = i === index;
      el.classList.toggle("actief", actief);
      el.setAttribute("aria-selected", actief ? "true" : "false");
    });
    document.querySelectorAll(".paneel").forEach(function (el, i) {
      el.hidden = i !== index;
    });
    updateAudio();
  }

  // Eén toggle-schuifje (licht of geluid) voor een paneel.
  function maakSchuif(index, soort) {
    const wrap = document.createElement("label");
    wrap.className = "schuif";

    const naam = soort === "licht" ? CONFIG.labels.licht : CONFIG.labels.geluid;

    const titel = document.createElement("span");
    titel.className = "schuif-titel";
    titel.textContent = naam;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "schuif-input";

    const track = document.createElement("span");
    track.className = "schuif-track";
    track.setAttribute("aria-hidden", "true");

    const stand = document.createElement("span");
    stand.className = "schuif-stand";
    stand.textContent = CONFIG.labels.uit;

    input.addEventListener("change", function () {
      if (soort === "licht") state[index].lichtAan = input.checked;
      else state[index].geluidAan = input.checked;
      stand.textContent = input.checked ? CONFIG.labels.aan : CONFIG.labels.uit;
      wrap.classList.toggle("aan", input.checked);
      if (index === actieveTab) updateAudio();
    });

    wrap.appendChild(titel);
    wrap.appendChild(input);
    wrap.appendChild(track);
    wrap.appendChild(stand);
    return wrap;
  }

  // Bouw tabbalk + panelen uit de config.
  function bouwUI() {
    document.getElementById("app-titel").textContent = CONFIG.titel;
    document.getElementById("start-titel").textContent = CONFIG.titel;
    document.getElementById("app-intro").textContent = CONFIG.intro;
    document.getElementById("start-knop").textContent = CONFIG.labels.start;
    document.getElementById("start-hint").textContent = CONFIG.labels.startHint;
    document.title = CONFIG.titel;

    const tabbalk = document.getElementById("tabbalk");
    const panelen = document.getElementById("panelen");

    CONFIG.responses.forEach(function (resp, index) {
      // Tab-knop
      const tab = document.createElement("button");
      tab.className = "tab" + (index === 0 ? " actief" : "");
      tab.textContent = resp.label;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
      tab.addEventListener("click", function () {
        kiesTab(index);
      });
      tabbalk.appendChild(tab);

      // Paneel
      const paneel = document.createElement("section");
      paneel.className = "paneel";
      paneel.setAttribute("role", "tabpanel");
      paneel.hidden = index !== 0;

      const beschrijving = document.createElement("p");
      beschrijving.className = "paneel-beschrijving";
      beschrijving.textContent = resp.description;

      const schuiven = document.createElement("div");
      schuiven.className = "schuiven";
      schuiven.appendChild(maakSchuif(index, "licht"));
      schuiven.appendChild(maakSchuif(index, "geluid"));

      const melding = document.createElement("p");
      melding.className = "melding";
      melding.id = "melding-" + index;

      paneel.appendChild(beschrijving);
      paneel.appendChild(schuiven);
      paneel.appendChild(melding);
      panelen.appendChild(paneel);
    });
  }

  // Start de app na de eerste klik (geeft toestemming voor geluid).
  function start() {
    document.getElementById("start-overlay").classList.add("verborgen");
    gestart = true;
    updateAudio();
  }

  document.addEventListener("DOMContentLoaded", function () {
    bouwUI();
    document.getElementById("start-knop").addEventListener("click", start);
  });
})();
