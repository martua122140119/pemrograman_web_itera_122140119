document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form default

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validasi Nama (harus lebih dari 3 karakter)
            if (name.length <= 3) {
                alert('Nama harus lebih dari 3 karakter');
                return;
            }

            // Validasi Email (format email harus valid)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Email harus valid');
                return;
            }

            // Validasi Password (minimal 8 karakter)
            if (password.length < 8) {
                alert('Password harus minimal 8 karakter');
                return;
            }

            alert('Form berhasil divalidasi!');
        });