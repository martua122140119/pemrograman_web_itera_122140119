# Program penghitung BMI (Body Mass Index) sederhana

# Input berat dan tinggi badan
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

# Hitung BMI
bmi = berat / (tinggi * tinggi)

# Tentukan kategori BMI
if bmi < 18.5:
    kategori = "Berat badan kurang"
elif 18.5 <= bmi < 25:
    kategori = "Berat badan normal"
elif 25 <= bmi < 30:
    kategori = "Berat badan berlebih"
else:  # BMI >= 30
    kategori = "Obesitas"

# Print hasil perhitungan dan kategori BMI
print(f"\nHasil Perhitungan:")
print(f"BMI = {bmi:.2f}")
print(f"Kategori: {kategori}")