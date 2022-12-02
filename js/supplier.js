let tableCont = document.querySelector('.dataTableSupplier');

fetch('http://localhost:8052/api/suppliers', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode_Supplier</th><th>Nama Supplier</th><th>Alamat</th><th>Kota</th><th>Telephone</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.codeSupplier + '</td><td>' + element.nameSuppliers + '</td><td>' + element.addressSupplier + '</td><td>' + element.citySupplier + '</td><td>' + element.phoneNumberSupplier + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let kodeSupplier = document.getElementById('kodeSupplier').value;
    let namaSupplier = document.getElementById('namaSupplier').value;
    let alamatSupplier = document.getElementById('alamatSupplier').value;
    let kotaSupplier = document.getElementById('kotaSupplier').value;
    let telephoneSupplier = document.getElementById('telephoneSupplier').value;

    fetch('http://localhost:8052/api/suppliers/addSupplier', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeSupplier: kodeSupplier,
            nameSuppliers: namaSupplier,
            addressSupplier: alamatSupplier,
            citySupplier: kotaSupplier,
            phoneNumberSupplier: telephoneSupplier,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}

// rubahdata
function updateToRest() {
    let kodeSupplier = document.getElementById('kodeSupplier').value;
    let namaSupplier = document.getElementById('namaSupplier').value;
    let alamatSupplier = document.getElementById('alamatSupplier').value;
    let kotaSupplier = document.getElementById('kotaSupplier').value;
    let telephoneSupplier = document.getElementById('telephoneSupplier').value;

    fetch('http://localhost:8052/api/suppliers/updateSuppliers', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeSupplier: kodeSupplier,
            nameSuppliers: namaSupplier,
            addressSupplier: alamatSupplier,
            citySupplier: kotaSupplier,
            phoneNumberSupplier: telephoneSupplier,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteToRest() {
    let codeSuppliers = document.getElementById('kodeSupplier').value;
    fetch('http://localhost:8052/api/suppliers/' + codeSuppliers, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
