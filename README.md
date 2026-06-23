# Coot Sounds

A small web app that lets you hear how three behavioral responses of coots

change under the influence of **light** and **sound**. The app has four tabs —
one per response. Each tab has two sliders (Light on/off, Sound
on/off). Together, these two sliders provide four combinations, and each combination
automatically plays (and loops) a corresponding coot sound.

> The included sounds are **placeholders** (regular tones). Replace them with
> your own recordings — see below.

## View live

If GitHub Pages is running, the app runs on:
<https://sgrosscurt.github.io/coot-stress-eccb/>

## Customize

You only need to know two things.

### 1. Add your own sounds

Place your `.mp3` files in the `sounds/<response>/` folder. For each response, there are
**four** files with fixed names:

| File name | When it plays |

| ---------------------------- | ------------------------- |

| `light-off_sound-off.mp3` | everything off (basic sound) |

| `light-on_sound-off.mp3` | only light on |

`light-off_sound-on.mp3` | only sound on |

| `light-on_sound-on.mp3` | light and sound on |

Simply replace the existing file with your own recording **with the same
name**. The app automatically selects the correct file for every position of the
sliders.

The folders are:

```
sounds/
├── activity-rate/
├── activity-pattern/
├── response-3/
└── response-4/

```

### 2. Changing tab names and texts

Open `js/config.js`. There you adjust the tab titles (`label`), the explanation per tab (`description`), and the general texts. If you also want to change a folder name,

adjust the `id` **and** rename the corresponding folder to `sounds/`.

## View locally

Audio does not load if you double-click `index.html` directly (browsers block that). Therefore, start a small local server in the project folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. Click on **"Click to start"** (browsers only allow sound after a click).

## Technology

Pure HTML, CSS, and JavaScript — no build step, no dependencies. Therefore, it can be hosted directly on GitHub Pages. ```
index.html page structure
css/styles.css styling
js/config.js ← adjust tabs and text here
js/app.js tab, slider, and audio logic
sounds/ ← add your sounds here
```
