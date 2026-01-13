document.getElementById("formDosen").addEventListener("submit", function (e) {
  e.preventDefault();

  let dosen = {
    nama: document.getElementById("nama").value,
    nidn: document.getElementById("nidn").value,
    prodi: document.getElementById("prodi").value
  };

  let dataDosen = JSON.parse(localStorage.getItem("dataDosen")) || [];
  dataDosen.push(dosen);

  localStorage.setItem("dataDosen", JSON.stringify(dataDosen));

  alert("Data berhasil disimpan");
  window.location.href = "data_dosen.html"; // pindah halaman
});