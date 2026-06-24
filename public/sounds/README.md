# Sound Files Directory

This directory should contain the coot call audio files for the webapp.

## Required Files

Add the following audio files to this directory:

1. **baseline.mp3** - Baseline coot call (no stress conditions)
2. **light_only.mp3** - Coot call with light pollution only
3. **noise_only.mp3** - Coot call with noise pollution only
4. **light_noise.mp3** - Coot call with both light and noise pollution

## File Format

- **Format**: MP3, WAV, OGG, or other web-compatible audio formats
- **Duration**: Keep loops between 2-10 seconds for smooth looping
- **Volume**: Normalize to consistent levels

## How to Add Files

1. Export your coot recordings in a web-compatible format
2. Place them in this `public/sounds/` directory
3. Ensure filenames match exactly (case-sensitive on Linux/Mac)
4. Test the app to ensure sounds play correctly

## Technical Notes

- The app loops these sounds continuously
- All four sounds should play automatically based on Light/Noise slider positions
- Sounds transition smoothly when conditions change
