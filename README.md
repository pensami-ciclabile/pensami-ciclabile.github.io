# pensami-ciclabile.github.io
Pensami Ciclabile on the web


Local exec:
```bash
npx @11ty/eleventy --serve
```



### Adding a New Post

#### 1. Add Images to the Gallery
Create a new directory inside ./src/assets/posts/ using the following format:
```bash
./src/assets/posts/YYYY-MM-DD-post-name/
```
- `YYYY-MM-DD`: the publication date
- `post-name`: a descriptive, dash-separated name of your choice

Inside this folder, include at least two PNG images:

- `draw.png`: the main drawing
- `original.png`: the original reference image

You may also include any number of additional PNG files. These must be named using the following pattern:

```bash
slice[...].png
```
Replace ... with any custom string you like (e.g., slice-detail1.png, slice-closeup.png, etc.).

#### 2. Generate Image for the Map
To create a favicon-style preview from the main drawing, use the reshape_preview.py script. Run it from the terminal with this command:

```bash
python scripts/reshape_preview.py path/to/image/draw.png
```
Replace path/to/image/ with the actual path to your new post directory, e.g.:

```bash
python scripts/reshape_preview.py ./src/assets/posts/2025-05-24-my-new-post/draw.png
```

#### 3. Upload favicon for the Map (via [Flourish](https://app.flourish.studio/projects))

