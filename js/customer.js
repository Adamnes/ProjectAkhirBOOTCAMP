let tableCont = document.querySelector('.dataTableCustomer');

fetch('http://localhost:8052/api/costumer', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode_Customer</th><th>Nama Customer</th><th>Alamat</th><th>Kota</th><th>Telephone</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.codeCostumer + '</td><td>' + element.nameCostumer + '</td><td>' + element.addressCostumer + '</td><td>' + element.cityCostumer + '</td><td>' + element.phoneNumberCostumer + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let kodeCustomer = document.getElementById('kodeCustomer').value;
    let namaCustomer = document.getElementById('namaCustomer').value;
    let alamatCustomer = document.getElementById('alamatCustomer').value;
    let kotaCustomer = document.getElementById('kotaCustomer').value;
    let telephoneCustomer = document.getElementById('telephoneCustomer').value;

    fetch('http://localhost:8052/api/costumer/addCostumer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeCostumer: kodeCustomer,
            nameCostumer: namaCustomer,
            addressCostumer: alamatCustomer,
            cityCostumer: kotaCustomer,
            phoneNumberCostumer: telephoneCustomer,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}

// rubahdata
function updateToRest() {
    let kodeCustomer = document.getElementById('kodeCustomer').value;
    let namaCustomer = document.getElementById('namaCustomer').value;
    let alamatCustomer = document.getElementById('alamatCustomer').value;
    let kotaCustomer = document.getElementById('kotaCustomer').value;
    let telephoneCustomer = document.getElementById('telephoneCustomer').value;

    fetch('http://localhost:8052/api/costumer/updateCostumer', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeCostumer: kodeCustomer,
            nameCostumer: namaCustomer,
            addressCostumer: alamatCustomer,
            cityCostumer: kotaCustomer,
            phoneNumberCostumer: telephoneCustomer,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteToRest() {
    let codeCustumer = document.getElementById('kodeCustomer').value;
    fetch('http://localhost:8052/api/costumer/' + codeCustumer, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
