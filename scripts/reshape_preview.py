import fire

from pathlib import Path
from PIL import Image, ImageDraw

def resize_and_crop_circle(
    img: Image.Image,
    output_path: Path,
    max_size: int = 180,
    zoom: float = 1.5
):

    # Determine the smallest dimension to make it perfectly circular
    min_side = min(img.size)
    
    # Crop to a square centered on the image
    left = (img.width - min_side) / 2
    top = (img.height - min_side) / 2
    right = (img.width + min_side) / 2
    bottom = (img.height + min_side) / 2
    img = img.crop((left, top, right, bottom))
    
    # Apply zoom by resizing to a larger square before final resizing
    zoomed_size = int(min_side * zoom)
    img = img.resize((zoomed_size, zoomed_size), Image.LANCZOS)
    
    # Resize while maintaining aspect ratio to the target max size
    img.thumbnail((max_size, max_size), Image.LANCZOS)
    
    # Create a circular mask
    mask = Image.new("L", (max_size, max_size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, max_size, max_size), fill=255)
    
    # Apply the circular mask
    result = Image.new("RGBA", (max_size, max_size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    
    # Save the output image
    result.save(output_path, format="PNG")
    
    return output_path




def main(
    image_path: str = "input.jpg",
    ):


    path = Path(image_path)
    image_file = Path(image_path).name
    image_dir = path.parent

    # Open the image
    img = Image.open(path).convert("RGBA")

    resize_and_crop_circle(
        img=img,
        output_path=image_dir / f"icon_{image_file}",
    )







if __name__ == "__main__":
    fire.Fire(main)
