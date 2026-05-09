from PIL import Image

def crop_transparent(image_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            cropped.save(image_path)
            print(f"Cropped {image_path} to bounding box: {bbox}")
        else:
            print(f"Image {image_path} is completely transparent or empty.")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

crop_transparent("public/logo_transparent.png")
crop_transparent("public/logo_dark_mode.png")
