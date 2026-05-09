from PIL import Image
import sys

def make_transparent(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            # Check if the pixel is close to white (255, 255, 255)
            # item is (R, G, B, A)
            if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
                newData.append((255, 255, 255, 0)) # Fully transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed image and saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

make_transparent("public/logo.png", "public/logo_transparent.png")
