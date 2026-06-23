# Coot Stress Responses - Interactive Sound Experience

**When stress interacts, responses diverge: Noise and light pollution reshape vocal behaviour of Eurasian coots**

## Overview

This interactive webapp allows you to explore how noise and light pollution affect Eurasian coot vocal behavior across three different response categories:

- **Activity Rate**: How stress affects coot call frequency
- **Circadian Pattern**: How stress affects time-of-day calling behavior  
- **Call Duration**: How stress affects individual call length

## Features

✅ Three interactive tabs for different response types
✅ Real-time sound playback based on environmental conditions
✅ ON/OFF switches for Light and Noise pollution levels
✅ Mute button to silence all sounds
✅ Mobile-first responsive design
✅ Start screen with coot icon
✅ Feedback forms for user input
✅ Easy-to-use interface optimized for phones

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sgrosscurt/coot-stress-eccb.git
cd coot-stress-eccb
```

2. Install dependencies:
```bash
npm install
```

3. Add sound files to the `public/sounds/` directory in this structure:
```
public/sounds/
├── activity/
│   ├── light-off_noise-off.mp3
│   ├── light-on_noise-off.mp3
│   ├── light-off_noise-on.mp3
│   └── light-on_noise-on.mp3
├── circadian/
│   ├── light-off_noise-off.mp3
│   ├── light-on_noise-off.mp3
│   ├── light-off_noise-on.mp3
│   └── light-on_noise-on.mp3
└── duration/
    ├── light-off_noise-off.mp3
    ├── light-on_noise-off.mp3
    ├── light-off_noise-on.mp3
    └── light-on_noise-on.mp3
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Sound Files

You need **12 sound files** in total (3 responses × 4 combinations):
- 3 responses × 4 combinations = 12 sounds

### File Naming Convention

Each sound must use these exact filenames (case-sensitive):
- `light-off_noise-off.mp3` - Baseline (no stressors)
- `light-on_noise-off.mp3` - Light pollution only
- `light-off_noise-on.mp3` - Noise pollution only
- `light-on_noise-on.mp3` - Both light and noise pollution

### Customizing the Coot Icon

To use your own coot icon instead of the emoji:

1. Place your PNG file in `public/icons/coot.png`
2. Update `src/components/StartScreen.js` to reference your image

## Usage

1. **Click the coot icon** on the start screen to begin
2. **Select a response type** using the tabs (Activity Rate, Circadian Pattern, or Call Duration)
3. **Toggle environmental conditions** using the Light and Noise switches
4. **Hear the effect** of each condition combination on coot vocalizations
5. **Mute sounds** using the 🔊 button in the top right
6. **Share feedback** at the bottom of the page

## Project Structure

```
coot-stress-eccb/
├── public/
│   ├── sounds/                 # Audio files (12 total)
│   │   ├── activity/
│   │   ├── circadian/
│   │   └── duration/
│   ├── icons/                  # Optional custom coot icon
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StartScreen.js
│   │   ├── TabContainer.js
│   │   ├── ResponseTab.js
│   │   ├── SoundPlayer.js
│   │   ├── ControlSwitches.js
│   │   └── FeedbackForm.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Mobile Optimization

This webapp is optimized for mobile devices with:
- Touch-friendly interface
- ON/OFF switches for clear interaction
- Large buttons and controls
- Full-width responsive layout
- Optimized font sizes for readability

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

The app automatically deploys to GitHub Pages when you push to the main branch via GitHub Actions.

View live: https://sgrosscurt.github.io/coot-stress-eccb/

## Contributing

Contributions are welcome! Feel free to:
- Add new features
- Improve the UI/UX
- Add more response types
- Enhance accessibility

## License

This project is open source and available under the MIT License.

## Contact

Have questions or feedback? Share your thoughts using the feedback form in the app!

---

**Created for**: Interactive exploration of how noise and light pollution affect Eurasian coot vocal behavior
