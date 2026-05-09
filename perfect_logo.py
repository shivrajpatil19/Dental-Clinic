from PIL import Image

def perfect_dark_mode(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for r, g, b, a in data:
            if a < 5:
                newData.append((255, 255, 255, 0))
                continue
                
            # Identify the light blue tooth.
            # Light blue has high blue, decent green, and lower red.
            # We are generous to ensure the whole tooth stays colored.
            is_light_blue = (b > 130) and (g > 100) and (b - r > 30)
            
            if is_light_blue:
                newData.append((r, g, b, a))
            else:
                # Everything else (dark text AND its anti-aliased gray edges) becomes pure white.
                # This PRESERVES the exact alpha transparency for buttery smooth edges!
                newData.append((255, 255, 255, a))
                
        img.putdata(newData)
        
        # Crop the transparent bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Perfectly smoothed and cropped dark mode logo saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

perfect_dark_mode("public/logo_transparent.png", "public/logo_dark_mode.png")
