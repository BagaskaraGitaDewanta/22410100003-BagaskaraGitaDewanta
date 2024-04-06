<!DOCTYPE html>
<html>
<body>
    <h2>JavaScript if</h2>
    <p id="isi">Good Evening!</p>
    <form>
        UTS
        <input type ="number"name ="uts" id="uts">
        <br>
        UAS 
        <input type ="number"name ="uas" id="uas">
        <br>
        Tugas
        <input type ="number"name ="tugas" id="tugas">
        <br>
        <button type="button" onclick='myfungsi(document.getElementById("uts").value,document.getElementById("uas").value,document.getElementById("tugas").value)'>hitung</button>
        <br>
        <input type ="text"name="nilai label" id = "nilai">
    </form>
    <script>
        function myfungsi(uts,uas,tgs)
        {
            let a = uts;
            let b = uas;
            let c = tgs;
            console.log(a);
            console.log(b);
            console.log(c);
            let d = 0.3*parseInt(uts) + 0.3*parseInt(uas) + 0.4*parseInt(tgs);
            console.log(d);
            if (d >= 80){
                let e =document.getElementById("nilai").value = "A";
            }else if (nilai >= 70){
                let e =document.getElementById("nilai").value = "B";
            }else{
                let e =document.getElementById("nilai").value = "C";
            }
            
            
        }
        
    </script>
</body>
</html>