const kodeBarangHarga = {
    "001": { nama: "A", harga: 10000 },
    "002": { nama: "B", harga: 20000 },
    "003": { nama: "C", harga: 30000 }
  };
  
  function prosesTransaksi() {
    const kodeBarang = document.getElementById("kodeBarang").value;
    const banyakBarang = parseInt(document.getElementById("banyakBarang").value);
    const barang = kodeBarangHarga[kodeBarang];
    const harga = barang.harga;
    const namaBarang = barang.nama;
    const totalBayar = harga * banyakBarang;
  
    window.alert(`Anda membeli ${banyakBarang} buah ${namaBarang} dengan harga Rp ${harga} per buah. Total yang harus dibayar: Rp ${totalBayar}`);
  
    const uangBayar = window.prompt("Masukkan uang yang akan dibayar:");
    const kembalian = uangBayar - totalBayar;
  
    window.alert(`Kembalian: Rp ${kembalian}`);
  }