var checkboxes = document.querySelectorAll('.exclusive-checkbox');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
    
        checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                otherCheckbox.checked = false;
            }
        });
    });
});
document.getElementById("checkbox1").addEventListener("click", VBalok);
document.getElementById("checkbox2").addEventListener("click", VKubus);
document.getElementById("checkbox3").addEventListener("click", VTabung);
document.getElementById("checkbox4").addEventListener("click", LPBalok);
document.getElementById("checkbox5").addEventListener("click", LPKubus);
document.getElementById("checkbox6").addEventListener("click", LPTabung);

function VBalok() {
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
function VKubus() {
    inputkontainer.innerHTML = 
    `
    Sisi
    <input type="number" name="Sisi" id="Sisi"><br>
    <button type="button" onclick='VolumeKubus(document.getElementById("Sisi").value)'>hitung</button>
    <br>
    <input type ="number"name="nilai label" id = "nilai">
    ` 
}
function VTabung() {
    inputkontainer.innerHTML = 
    `
    Jari-jari
    <input type="number" name="JariJari" id="jari2"><br>
    Tinggi
    <input type="number" name="Tinggi" id="tinggi"><br>
    <button type="button" onclick='VolumeTabung(document.getElementById("jari2").value,document.getElementById("tinggi").value)'>hitung</button><br>
    <input type="number" name="nilai label" id="nilai">
    `
}
function LPBalok() {
    inputkontainer.innerHTML = 
    `
    Panjang
    <input type="number" name="Panjang" id="Panjang"><br>
    Lebar
    <input type="number" name="Lebar" id="Lebar"><br>
    Tinggi
    <input type="number" namer="Tinggi" id="Tinggi"><br>
    <button type="button" onclick='LuasPBalok(document.getElementById("Panjang").value,document.getElementById("Lebar").value,
    document.getElementById("Tinggi").value)'>hitung</button><br>
    <input type ="number"name="nilai label" id = "nilai">
    `
    
}
function LPKubus() {
    inputkontainer.innerHTML = 
    `
    Sisi
    <input type="number" name="Sisi" id="Sisi"><br>
    <button type="button" onclick='LuasPKubus(document.getElementById("Sisi").value)'>hitung</button>
    <br>
    <input type ="number"name="nilai label" id = "nilai">
    ` 
    
}
function LPTabung() {
    inputkontainer.innerHTML = 
    `
    Jari-jari
    <input type="number" name="JariJari" id="jari2"><br>
    Tinggi
    <input type="number" name="Tinggi" id="tinggi"><br>
    <button type="button" onclick='LuasPTabung(document.getElementById("jari2").value,document.getElementById("tinggi").value)'>hitung</button><br>
    <input type="number" name="nilai label" id="nilai">
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
function VolumeTabung(jari2,tinggi) {
    let r = jari2;
    let t = tinggi;
    let v = 22/7 * parseInt(r)*parseInt(r)*parseInt(t);
    document.getElementById("nilai").value = v;  
}
function LuasPBalok(Panjang,Lebar,Tinggi) {
    let a = Panjang;
    let b = Lebar;
    let c = Tinggi;
    let v = 2 * ( (parseInt(a)*parseInt(b)) + (parseInt(a)*parseInt(c)) + (parseInt(c)*parseInt(b))  )
    document.getElementById("nilai").value = v;  
}
function LuasPKubus(Sisi) {
    let s = Sisi;
    let v = 6*parseInt(s)*parseInt(s);
    document.getElementById("nilai").value = v;  
}
function LuasPTabung(jari2,tinggi) {
    let r = jari2;
    let t = tinggi;
    let v = 2 * 22/7 * parseInt(r) * (parseInt(r) + parseInt(t))
    document.getElementById("nilai").value = v;  
}