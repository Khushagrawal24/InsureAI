import pandas as pd
import random
import uuid

# Predefined lists of possible values for dummy data
part_names = [
    'Front Bumper', 'Rear Bumper', 'Side Mirror', 'Hood', 'Fender', 
    'Door Handle', 'Grille', 'Headlight', 'Taillight', 'Side Skirt'
]

brands = ['Maruti Suzuki']

categories = ['Bumpers', 'Lights', 'Mirrors', 'Doors', 'Fenders', 'Hoods']

variants = ['Standard', 'Modified', 'OEM']

# Function to generate a random price between 500 and 10,000 INR
def random_price():
    return round(random.uniform(500, 10000), 2)

# Function to generate a random part number (UUID)
def random_part_number():
    return str(uuid.uuid4())[:8].upper()

# Creating the dummy data
dummy_data = []

for i in range(10000):  # Generate 100 dummy car parts
    part_name = random.choice(part_names)
    brand = random.choice(brands)
    category = random.choice(categories)
    variant = random.choice(variants)
    price = random_price()
    part_number = random_part_number()
    
    dummy_data.append({
        "Part Name": part_name,
        "Part Number": part_number,
        "Price (INR)": price,
        "Item Brand": brand,
        "Item Category": category,
        "Item Variant": variant,
        "Quantity": random.randint(1, 5)  # Random quantity between 1 and 5
    })

# Convert to a pandas DataFrame
df = pd.DataFrame(dummy_data)

# Save to CSV
csv_file_path = "dummy_car_body_parts.csv"
df.to_csv(csv_file_path, index=False)

print(f"Dummy data saved to {csv_file_path}")

# Display the first few rows of the dataset
print(df.head())
