from PIL import Image

def make_dark_mode(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            r, g, b, a = item
            # The text is very dark blue. Sum of RGB for dark blue is usually low.
            # Let's consider anything with R+G+B < 250 to be the "dark" part (text).
            if a > 0 and (r + g + b) < 250: 
                # Turn it pure white
                newData.append((255, 255, 255, a))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully generated dark mode logo at {output_path}")
    except Exception as e:
        print(f"Error: {e}")

make_dark_mode("public/logo_transparent.png", "public/logo_dark_mode.png")
