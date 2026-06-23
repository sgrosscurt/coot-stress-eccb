# Meerkoetgeluiden

Een kleine webapp waarmee je kunt horen hoe vier gedragsresponses van meerkoeten
veranderen onder invloed van **licht** en **geluid**. De app heeft vier tabjes —
één per response. Op elk tabje staan twee schuifjes (Licht aan/uit, Geluid
aan/uit). Die twee schuifjes geven samen vier combinaties, en elke combinatie
speelt automatisch (en loopend) een bijbehorend meerkoetgeluid af.

> De meegeleverde geluiden zijn **placeholders** (gewoon tonen). Vervang ze door
> je eigen opnames — zie hieronder.

## Live bekijken

Als GitHub Pages aanstaat, draait de app op:
<https://sgrosscurt.github.io/coot-stress-eccb/>

## Zelf aanpassen

Je hoeft maar twee dingen te weten.

### 1. Eigen geluiden toevoegen

Zet je `.mp3`-bestanden in de map `sounds/<response>/`. Per response zijn er
**vier** bestanden met vaste namen:

| Bestandsnaam                 | Wanneer het speelt        |
| ---------------------------- | ------------------------- |
| `licht-uit_geluid-uit.mp3`   | alles uit (basisgeluid)   |
| `licht-aan_geluid-uit.mp3`   | alleen licht aan          |
| `licht-uit_geluid-aan.mp3`   | alleen geluid aan         |
| `licht-aan_geluid-aan.mp3`   | licht én geluid aan       |

Vervang simpelweg het bestaande bestand door je eigen opname **met dezelfde
naam**. De app pakt automatisch het juiste bestand bij elke stand van de
schuifjes.

De mappen zijn:

```
sounds/
├── activity-rate/
├── activity-pattern/
├── response-3/
└── response-4/
```

### 2. Tabnamen en teksten wijzigen

Open `js/config.js`. Daar pas je de tabtitels (`label`), de uitleg per tab
(`description`) en de algemene teksten aan. Wil je ook een mapnaam veranderen,
pas dan de `id` aan **én** hernoem de bijbehorende map in `sounds/`.

## Lokaal bekijken

Audio laadt niet als je `index.html` rechtstreeks dubbelklikt (browsers
blokkeren dat). Start daarom een klein lokaal serventje in de projectmap:

```bash
python3 -m http.server 8000
```

Open daarna <http://localhost:8000> in je browser. Klik op **"Klik om te
beginnen"** (browsers staan geluid pas toe na een klik).

## Techniek

Pure HTML, CSS en JavaScript — geen build-stap, geen dependencies. Daardoor
direct te hosten op GitHub Pages.

```
index.html        opbouw van de pagina
css/styles.css    opmaak
js/config.js      ← hier pas je tabs en teksten aan
js/app.js         tab-, schuifjes- en audio-logica
sounds/           ← hier zet je je geluiden
```
