/* =========================================================================
   CONFIG  —  Dit is het ENIGE bestand dat je hoeft aan te passen.
   =========================================================================

   1) TABNAMEN / TEKSTEN WIJZIGEN
      Pas hieronder bij `responses` de `label` (tabtitel) en `description`
      (uitleg boven de schuifjes) aan. Wil je ook de mapnaam veranderen,
      pas dan `id` aan én hernoem de bijbehorende map in `sounds/`.

   2) EIGEN GELUIDEN TOEVOEGEN
      Zet je .mp3-bestanden in sounds/<id>/ met deze 4 vaste namen:
         licht-uit_geluid-uit.mp3   (alles uit  = basisgeluid)
         licht-aan_geluid-uit.mp3   (alleen licht aan)
         licht-uit_geluid-aan.mp3   (alleen geluid aan)
         licht-aan_geluid-aan.mp3   (beide aan)
      De app pakt automatisch het juiste bestand bij elke schuifjes-stand.
   ========================================================================= */

const CONFIG = {
  // Titel en intro bovenaan de pagina
  titel: "Meerkoetgeluiden",
  intro:
    "Zet per response het licht en het geluid aan of uit en hoor hoe het " +
    "meerkoetgeluid verandert.",

  // De vier tabjes (responses). Volgorde = volgorde in de tabbalk.
  responses: [
    {
      id: "activity-rate",
      label: "Activity rate",
      description:
        "Hoe vaak de meerkoet actief is. Speel met licht en geluid om het " +
        "effect te horen.",
    },
    {
      id: "activity-pattern",
      label: "Activity pattern",
      description:
        "Het patroon van activiteit over de tijd. Speel met licht en geluid " +
        "om het effect te horen.",
    },
    {
      id: "response-3",
      label: "Response 3",
      description:
        "Hernoem deze response naar wens in js/config.js.",
    },
    {
      id: "response-4",
      label: "Response 4",
      description:
        "Hernoem deze response naar wens in js/config.js.",
    },
  ],

  // Teksten op de knoppen / schuifjes
  labels: {
    licht: "Licht",
    geluid: "Geluid",
    aan: "aan",
    uit: "uit",
    start: "Klik om te beginnen",
    startHint: "Je browser staat geluid pas toe na een klik.",
  },
};
