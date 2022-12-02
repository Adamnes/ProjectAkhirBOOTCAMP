let tableCont = document.querySelector('.dataTabelTransaksi');

fetch('http://localhost:8052/api/purchase', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>No. Nota</th><th>Tanggal Beli</th><th>Qty</th><th>Harga</th><th>Kode_barang</th><th>Kode_Costumer</th><th>Kode_Supplier</th><th>Kode_Admin</th><th>Action</th></tr>';

        data.forEach((element) => {
            thead +=
                '<tr><td>' +
                element.noteNumber +
                '</td><td>' +
                element.PurchaseDate +
                '</td><td>' +
                element.numberProduct +
                '</td><td>' +
                element.thePrice +
                '</td><td>' +
                element.codeProgramProduct +
                '</td><td>' +
                element.codeProgramCostumer +
                '</td><td>' +
                element.codeProgramSupplier +
                '</td><td>' +
                element.codeProgramAdmin +
                '</td><td><button class="btn btn-primary">Accept</button><button class="btn btn-danger">Decline</button></td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let noNota = document.getElementById('noNota').value;
    let tanggalBeli = document.getElementById('tanggalBeli').value;
    console.log(tanggalBeli);
    let qty = document.getElementById('qty').value;
    let harga = document.getElementById('harga').value;
    let kodeBarangTransaksi = document.getElementById('kodeBarangTransaksi').value;
    let kodeCustumerTransaksi = document.getElementById('kodeCustumerTransaksi').value;
    let kodeSupplierTransaksi = document.getElementById('kodeSupplierTransaksi').value;
    let kodeAdminTransaksi = document.getElementById('kodeAdminTransaksi').value;

    fetch('http://localhost:8052/api/purchase/addPurchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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

    // window.location.reload();
}

// rubahdata
function updateToRest() {
    let noNota = document.getElementById('noNota').value;
    let tanggalBeli = document.getElementById('tanggalBeli').value;
    let qty = document.getElementById('qty').value;
    let harga = document.getElementById('harga').value;
    let kodeBarangTransaksi = document.getElementById('kodeBarangTransaksi').value;
    let kodeCustumerTransaksi = document.getElementById('kodeCustumerTransaksi').value;
    let kodeSupplierTransaksi = document.getElementById('kodeSupplierTransaksi').value;
    let kodeAdminTransaksi = document.getElementById('kodeAdminTransaksi').value;

    fetch('http://localhost:8052/api/purchase/updatePurchase', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
    let noteNumber = document.getElementById('noNota').value;
    fetch('http://localhost:8052/api/purchase/' + noteNumber, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// transaksi
function postToTrans() {
    let noNota1 = document.getElementById('noNota').value;
    let nama1 = document.getElementById('namaLengkap').value;
    let tanggalBeli1 = document.getElementById('tanggalBeli').value;
    let qty1 = document.getElementById('qty').value;
    let harga1 = document.getElementById('harga').value;

    fetch('http://localhost:8052/api/purchase/addPurchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            noteNumber: noNota1,
            nameCustomer: nama1,
            PurchaseDate: tanggalBeli1,
            numberProduct: qty1,
            thePrice: harga1,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}
