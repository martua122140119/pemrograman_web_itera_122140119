# Program pengelolaan data nilai mahasiswa

# Membuat list berisi 5 dictionary data mahasiswa
mahasiswa = [
    {"nama": "Budi Santoso", "nim": "12345", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 78},
    {"nama": "Ani Wijaya", "nim": "23456", "nilai_uts": 75, "nilai_uas": 65, "nilai_tugas": 82},
    {"nama": "Dedi Kurniawan", "nim": "34567", "nilai_uts": 60, "nilai_uas": 75, "nilai_tugas": 68},
    {"nama": "Siti Rahayu", "nim": "45678", "nilai_uts": 90, "nilai_uas": 85, "nilai_tugas": 95},
    {"nama": "Rini Susanti", "nim": "56789", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 60}
]

# Fungsi untuk menghitung nilai akhir
def hitung_nilai_akhir(uts, uas, tugas):
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas)

# Fungsi untuk menentukan grade berdasarkan nilai akhir
def tentukan_grade(nilai_akhir):
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"

# Menghitung nilai akhir dan grade untuk setiap mahasiswa
for mhs in mahasiswa:
    nilai_akhir = hitung_nilai_akhir(mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"])
    mhs["nilai_akhir"] = round(nilai_akhir, 2)
    mhs["grade"] = tentukan_grade(nilai_akhir)

# Menampilkan data mahasiswa dalam format tabel
print("\nDATA NILAI MAHASISWA")
print("=" * 80)
print("{:<5} {:<20} {:<10} {:<8} {:<8} {:<8} {:<12} {:<5}".format(
    "No", "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
print("-" * 80)

for i, mhs in enumerate(mahasiswa, 1):
    print("{:<5} {:<20} {:<10} {:<8} {:<8} {:<8} {:<12} {:<5}".format(
        i,
        mhs["nama"],
        mhs["nim"],
        mhs["nilai_uts"],
        mhs["nilai_uas"],
        mhs["nilai_tugas"],
        mhs["nilai_akhir"],
        mhs["grade"]
    ))

print("-" * 80)

# Mencari mahasiswa dengan nilai tertinggi dan terendah
nilai_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"Nama: {nilai_tertinggi['nama']}, NIM: {nilai_tertinggi['nim']}, Nilai Akhir: {nilai_tertinggi['nilai_akhir']}, Grade: {nilai_tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"Nama: {nilai_terendah['nama']}, NIM: {nilai_terendah['nim']}, Nilai Akhir: {nilai_terendah['nilai_akhir']}, Grade: {nilai_terendah['grade']}")