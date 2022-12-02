let tableCont = document.querySelector('.dataTabelHistory');

fetch('http://localhost:8052/api/history', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode_History</th><th>No. Nota</th><th>Tanggal Beli</th><th>Qty</th><th>Harga</th><th>Kode_barang</th><th>Kode_Costumer</th><th>Kode_Supplier</th><th>Kode_Admin</th></tr>';

        data.forEach((element) => {
            thead +=
                '<tr><td>' +
                element.codeHistory +
                '</td><td>' +
                element.numberOfNota +
                '</td><td>' +
                element.dateOfHistory +
                '</td><td>' +
                element.numberOfProduct +
                '</td><td>' +
                element.thePriceOfHistory +
                '</td><td>' +
                element.codeOfProduct +
                '</td><td>' +
                element.codeOfCostumer +
                '</td><td>' +
                element.codeOfSupplier +
                '</td><td>' +
                element.codeOfAdmin +
                '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let kodeHistory = document.getElementById('kodeHistory').value;
    let noNota = document.getElementById('noNota').value;
    let tanggalBeli = document.getElementById('tanggalBeli').value;
    let qty = document.getElementById('qty').value;
    let harga = document.getElementById('harga').value;
    let kodeBarangTransaksi = document.getElementById('kodeBarangTransaksi').value;
    let kodeCustumerTransaksi = document.getElementById('kodeCustumerTransaksi').value;
    let kodeSupplierTransaksi = document.getElementById('kodeSupplierTransaksi').value;
    let kodeAdminTransaksi = document.getElementById('kodeAdminTransaksi').value;

    fetch('http://localhost:8052/api/history/addHistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeHistory: kodeHistory,
            noteNumber: noNota,
            PurchaseDate: tanggalBeli,
            numberProduct: qty,
            thePrice: harga,
            codeProgramProduct: kodeBarangTransaksi,
            codeProgramCostumer: kodeCustumerTransaksi,
            codeProgramSupplier: kodeSupplierTransaksi,
            codeProgramAdmin: kodeAdminTransaksi,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}

// rubahdata
function updateToRest() {
    let kodeHistory = document.getElementById('kodeHistory').value;
    let noNota = document.getElementById('noNota').value;
    let tanggalBeli = document.getElementById('tanggalBeli').value;
    let qty = document.getElementById('qty').value;
    let harga = document.getElementById('harga').value;
    let kodeBarangTransaksi = document.getElementById('kodeBarangTransaksi').value;
    let kodeCustumerTransaksi = document.getElementById('kodeCustumerTransaksi').value;
    let kodeSupplierTransaksi = document.getElementById('kodeSupplierTransaksi').value;
    let kodeAdminTransaksi = document.getElementById('kodeAdminTransaksi').value;

    fetch('http://localhost:8052/api/history/updateHistory', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeHistory: kodeHistory,
            noteNumber: noNota,
            PurchaseDate: tanggalBeli,
            numberProduct: qty,
            thePrice: harga,
            codeProgramProduct: kodeBarangTransaksi,
            codeProgramCostumer: kodeCustumerTransaksi,
            codeProgramSupplier: kodeSupplierTransaksi,
            codeProgramAdmin: kodeAdminTransaksi,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteToRest() {
    let codeHistory = document.getElementById('kodeHistory').value;
    fetch('http://localhost:8052/api/history/' + codeHistory, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
