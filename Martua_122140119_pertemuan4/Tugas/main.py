# main.py
# Program utama yang menggunakan modul math_operations

# Cara 1: Mengimpor seluruh modul
import math_operations

# Cara 2: Mengimpor fungsi spesifik
from math_operations import luas_lingkaran, keliling_lingkaran, celsius_ke_fahrenheit, celsius_ke_kelvin

def main():
    print("=" * 50)
    print("PROGRAM MATEMATIKA PYTHON".center(50))
    print("=" * 50)
    
    # Bagian 1: Perhitungan Geometri
    print("\n--- PERHITUNGAN BENTUK GEOMETRI ---")
    
    # Menggunakan cara impor 1 (import module)
    sisi_persegi = 5
    print(f"\nPersegi dengan sisi {sisi_persegi} satuan:")
    print(f"Luas: {math_operations.luas_persegi(sisi_persegi)} satuan persegi")
    print(f"Keliling: {math_operations.keliling_persegi(sisi_persegi)} satuan")
    
    panjang = 8
    lebar = 4
    print(f"\nPersegi panjang dengan panjang {panjang} dan lebar {lebar} satuan:")
    print(f"Luas: {math_operations.luas_persegi_panjang(panjang, lebar)} satuan persegi")
    print(f"Keliling: {math_operations.keliling_persegi_panjang(panjang, lebar)} satuan")
    
    # Menggunakan cara impor 2 (from module import function)
    radius = 7
    print(f"\nLingkaran dengan radius {radius} satuan:")
    print(f"Luas: {luas_lingkaran(radius):.2f} satuan persegi")
    print(f"Keliling: {keliling_lingkaran(radius):.2f} satuan")
    print(f"Nilai PI yang digunakan: {math_operations.PI}")
    
    # Bagian 2: Konversi Suhu
    print("\n--- KONVERSI SUHU ---")
    
    # Menggunakan cara impor 1
    suhu_celsius = 25
    print(f"\nKonversi {suhu_celsius}°C:")
    print(f"Fahrenheit: {math_operations.celsius_ke_fahrenheit(suhu_celsius):.2f}°F")
    print(f"Kelvin: {math_operations.celsius_ke_kelvin(suhu_celsius):.2f}K")
    
    # Menggunakan cara impor 2
    print(f"\nMenggunakan fungsi yang diimpor langsung:")
    print(f"{suhu_celsius}°C = {celsius_ke_fahrenheit(suhu_celsius):.2f}°F")
    print(f"{suhu_celsius}°C = {celsius_ke_kelvin(suhu_celsius):.2f}K")
    
    # Konversi tambahan
    suhu_fahrenheit = 98.6
    print(f"\n{suhu_fahrenheit}°F = {math_operations.fahrenheit_ke_celsius(suhu_fahrenheit):.2f}°C")
    
    suhu_kelvin = 300
    print(f"{suhu_kelvin}K = {math_operations.kelvin_ke_celsius(suhu_kelvin):.2f}°C")

if __name__ == "__main__":
    main()