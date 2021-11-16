# circular-waveform-visualizer

## Why?

I got inspired when watching a video about Fourier Transform by Grant Sanderson (3Blue1Brown on youtube). So i decided make my own little visualizer.
## How?

**Drawing a single shape:** It generates 3 sin waves each with a random amplitude and frequency (between -25 and 25). It then draws a circle, and determines the radius of the circle individually for each point drawn. The radius is determined by the additive sum of each of those 3 sin waves given the current angle.

**Animating between shapes:** It generates 10 sets of 3 sin waves, each set being converted to an SVG path string. Then every second the path string is swapped and the SVG animates according to some CSS transition rules. Every minute a new set of 10 is generated.

## Links

**Visualizer**: https://olian04.github.io/circular-waveform-visualizer/

**3Blue1Brown video**: https://www.youtube.com/watch?v=spUNpyF58BY
