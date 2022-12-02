let tableCont = document.querySelector('.dataTableAdmin');

fetch('http://localhost:8052/api/admin', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode_Admin</th><th>Nama Admin</th><th>Alamat</th><th>Telephone</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.codeAdmin + '</td><td>' + element.nameAdmin + '</td><td>' + element.addressAdmin + '</td><td>' + element.phoneNumberAdmin + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let kodeAdmin = document.getElementById('kodeAdmin').value;
    let namaAdmin = document.getElementById('namaAdmin').value;
    let alamat = document.getElementById('alamat').value;
    let telephone = document.getElementById('telephone').value;

    fetch('http://localhost:8052/api/admin/addadmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeAdmin: kodeAdmin,
            nameAdmin: namaAdmin,
            addressAdmin: alamat,
            phoneNumberAdmin: telephone,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}

// rubahdata
function updateToRest() {
    let kodeAdmin = document.getElementById('kodeAdmin').value;
    let namaAdmin = document.getElementById('namaAdmin').value;
    let alamat = document.getElementById('alamat').value;
    let telephone = document.getElementById('telephone').value;

    fetch('http://localhost:8052/api/admin/updateAdmin', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeAdmin: kodeAdmin,
            nameAdmin: namaAdmin,
            addressAdmin: alamat,
            phoneNumberAdmin: telephone,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteToRest() {
    let codeAdmin = document.getElementById('kodeAdmin').value;
    fetch('http://localhost:8052/api/admin/' + codeAdmin, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
