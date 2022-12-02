let tableCont = document.querySelector('.dataTableBarang');

fetch('http://localhost:8052/api/products', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode Barang</th><th>Name Barang</th><th>Satuan</th><th>Stok</th><th>Harga</th><th>Detail Product</th></tr>';

        data.forEach((element) => {
            thead +=
                '<tr><td>' +
                element.codeProduct +
                '</td><td>' +
                element.nameBarang +
                '</td><td>' +
                element.unitProduct +
                '</td><td>' +
                element.stockProduct +
                '</td><td>' +
                element.priceProduct +
                '</td><td>' +
                element.detailProduct +
                '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });

// tambahdata
function postToRest() {
    let kodeBarang = document.getElementById('kodeBarang').value;
    let namaBarang = document.getElementById('namaBarang').value;
    let satuanBarang = document.getElementById('satuanBarang').value;
    let stokbarang = document.getElementById('stokBarang').value;
    let hargaBarang = document.getElementById('hargaBarang').value;
    let detailProduct = document.getElementById('detailProduct').value;

    fetch('http://localhost:8052/api/products/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeProduct: kodeBarang,
            nameBarang: namaBarang,
            unitProduct: satuanBarang,
            stockProduct: stokbarang,
            priceProduct: hargaBarang,
            detailProduct: detailProduct,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

    window.location.reload();
}

// rubahdata
function updateToRest() {
    let kodeBarang = document.getElementById('#kodeBarang').value;
    let namaBarang = document.getElementById('#namaBarang').value;
    let satuanBarang = document.getElementById('#satuanBarang').value;
    let stokbarang = document.getElementById('#stokbarang').value;
    let hargaBarang = document.getElementById('#hargaBarang').value;

    fetch('http://localhost:8052/api/products/updateProduct', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codeProduct: kodeBarang,
            nameBarang: namaBarang,
            unitProduct: satuanBarang,
            stockProduct: stokbarang,
            priceProduct: hargaBarang,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteToRest() {
    let kodeBarang = document.getElementById('kodeBarang').value;
    fetch('http://localhost:8052/api/products/' + kodeBarang, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
