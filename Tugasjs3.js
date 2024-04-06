document.getElementById("Balok").addEventListener("click", PanggilBalok);
document.getElementById("Kubus").addEventListener("click", PanggilKubus);
const inputkontainer = document.getElementById("input");
function PanggilBalok() {
    inputkontainer.innerHTML = 
    `
    Panjang
    <input type="number" name="Panjang" id="Panjang"><br>
    Lebar
    <input type="number" name="Lebar" id="Lebar"><br>
    Tinggi
    <input type="number" namer="Tinggi" id="Tinggi"><br>
    <button type="button" onclick='VolumeBalok(document.getElementById("Panjang").value,document.getElementById("Lebar").value,
    document.getElementById("Tinggi").value)'>hitung</button><br>
    <input type ="number"name="nilai label" id = "nilai">
    `
    
}
function PanggilKubus() {
    inputkontainer.innerHTML = 
    `
    Sisi
    <input type="number" name="Sisi" id="Sisi"><br>
    <button type="button" onclick='VolumeKubus(document.getElementById("Sisi").value)'>hitung</button>
    <br>
    <input type ="number"name="nilai label" id = "nilai">
    ` 
}
function VolumeBalok(Panjang,Lebar,Tinggi) {
    let a = Panjang;
    let b = Lebar;
    let c = Tinggi;
    let v = parseInt(a)*parseInt(b)*parseInt(c);
    document.getElementById("nilai").value = v;  
}
function VolumeKubus(Sisi) {
    let s = Sisi;
    let v = parseInt(s)*parseInt(s)*parseInt(s);
    document.getElementById("nilai").value = v;  
}