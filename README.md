# ATIS Generator

A modern, sleek ATIS (Automatic Terminal Information Service) generator with an Apple-inspired design. This tool helps aviation professionals and enthusiasts create properly formatted ATIS messages for Discord or other platforms.

## Features

- 🎨 Modern, Apple-inspired dark theme interface
- ⚡ Real-time UTC time updates
- 🎯 Discord username integration with @ mentions
- 📱 Responsive design for all devices
- ✨ Smooth animations and hover effects
- 🎭 Professional monospace font for ATIS output

## Required Information

The generator collects the following information:

### Basic Information
- Discord Username
- Airport ICAO Code (e.g., KJFK, EGLL)
- ATIS Letter Identifier (Alpha through Hotel)
- Current UTC Time (automatically updated)

### Weather & Runway Conditions
- Wind Direction & Speed
- Visibility

### Runway & Operational Information
- Departure Runway
- Arrival Runway
- Approach Type (ILS, RNAV, VOR, Visual)
- NOTAMs/Special Instructions

## Usage

1. Open `index.html` in a web browser
2. Fill in all required fields
3. Click "Generate ATIS"
4. Copy the generated ATIS message
5. Paste into Discord or your preferred platform

## Output Format

```
@[Discord Username]

[Airport ICAO] ATIS Information [Letter]
[Time] Zulu

Wind [Direction and Speed]
Visibility [Distance]

Landing and departing runway(s) [Departure RWY] for departure, [Arrival RWY] for arrival.
[Approach Type] approaches in use.

[NOTAMs or special instructions]

Advise on initial contact you have Information [Letter].
```

## Technical Details

- Built with vanilla JavaScript
- No external dependencies
- Responsive design using CSS Grid and Flexbox
- Modern CSS features including CSS Variables and Transitions
- Cross-browser compatible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 