let judul = document.querySelector('.product');

fetch('http://localhost:8052/api/products', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let cardhead = '<div class="card-content-all"><div class="content-product"><img src="img/Monitor1.png" width="250px" alt="">';
        let cards = '';
        data.forEach((element) => {
            cards +=
                cardhead +
                '<h4>' +
                element.nameBarang +
                '</h4><p>' +
                element.detailProduct +
                '</p> <div class="harga-product"><h5>Rp ' +
                element.priceProduct +
                '</h5></div></div><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><a  id="getValue" value =" ' +
                element.codeProduct +
                ' " href="detail-product.html"  onclick="cobaDulu()">Beli Sekarang</a></button></div>';
        });
        judul.innerHTML = cards;
    });

// //baru sampai sini
// let pembungkusDetailProduct = document.querySelector('detail-product');

// fetch('http://localhost:8052/api/products', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => {
//         let cardhead = '<div class="img-product" data-aos="fade-up-right"><img src="img/Monitor1.png" alt=""></div>';
//         let cards = '';
//         data.forEach((element) => {
//             cards +=
//                 cardhead +
//                 '  <div class="detail-title-product" data-aos="fade-up-left"><h3>' +
//                 element.nameBarang +
//                 '</h3></div> <div class="harga-product mt-3"><h5>' +
//                 element.priceProduct +
//                 '</h5></div><div class="deskirpsi-produk mt-3"> <p class="text-center">' +
//                 element.detailProduct +
//                 '</p></div>';
//         });
//         judul.innerHTML = cards;
//     });

// // tambahdata
// function beliBarang() {
//     // let kodeBarang1 = document.getElementById('kodeBarang').value;
//     // let namaBarang1 = document.getElementById('namaBarang').value;
//     let namaLengkap = document.getElementById('namaLengkap').value;
//     let stokbarang1 = document.getElementById('stokBarang').value;

//     fetch('http://localhost:8052/api/purchase/addPurchase', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             // codeProduct: kodeBarang1,
//             // nameBarang: namaBarang1,
//             nameCustomer: namaLengkap,
//             numberProduct: stokbarang1,
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data));

//     window.location.reload();
// }

// tambahdata
// function postToRest() {
//     let kodeBarang = document.getElementById('kodeBarang').value;
//     let namaBarang = document.getElementById('namaBarang').value;
//     let stokbarang = document.getElementById('stokBarang').value;
//     let namaLengkap = document.getElementById('namaLengkap').value;
//     let hargaBarang = document.getElementById('hargaBarang').value;

//     fetch('http://localhost:8052/api/products/addProduct', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             codeProduct: kodeBarang,
//             nameBarang: namaBarang,
//             unitProduct: satuanBarang,
//             stockProduct: stokbarang,
//             priceProduct: hargaBarang,
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data));

//     window.location.reload();
// }

// function cobaDulu() {
//     let getValue2 = document.getElementById('getValue').value;
//     console.log(getValue2);
// }

// function detailBarang() {
//     let detailProduct = document.querySelector('.detail-title-product').value;
//     // let buttonDetail = document.querySelector('.btn-up').value;
//     // let title = document.querySelector('.title');

//     fetch('http://localhost:8052/api/products/detailProduct/' + buttonDetail, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             let thead = '';
//             data.forEach((element) => {
//                 thead =
//                     '<div class="detail-title-product" data-aos="fade-up-left"><h3>' +
//                     element.nameBarang +
//                     '</h3><div class="harga-product"><h5>' +
//                     element.priceProduct +
//                     '</h5></div><div class="deskirpsi-produk"><p>' +
//                     element.detailProduct +
//                     '</p></div>';
//             });
//             detailProduct.innerHTML = thead;
//         });
// }

// let detailProduct = document.querySelector('.detail-title-product');
// let title = document.querySelector('.title');

// fetch('http://localhost:8052/api/products/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => {
//         let thead = '';
//         data.forEach((element) => {
//             thead = element.nameBarang + element.priceProduct + element.detailProduct;
//         });
//         detailProduct.innerHTML = thead;
//     });
// fetch('http://localhost:8052/api/products/detailPerId/' + title2, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => {
//         let title = document.querySelector('.title');
//         let harga = document.querySelector('.price');
//         let deskripsi = document.querySelector('.desc');
//         let title2 = data.codeProduct;
//         let price = data.nameBarang;
//         let descript = data.detailProduct;
//         title.innerHTML = title2;
//         harga.innerHTML = price;
//         deskripsi.innerHTML = descript;
//     });
