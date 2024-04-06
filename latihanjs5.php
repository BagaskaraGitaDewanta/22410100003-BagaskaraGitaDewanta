<!DOCTYPE html>
<html>
<body>
    <h2>JavaScript For Loop</h2>
    
    <form>
        Start
        <input type = "number" name="start" id = "start">
        <br>
        end
        <input type = "number" name="end" id = "end">
        <br>
        <button type = "button" onclick = 'myfungsi()'>tampil</button>
    </form>
    <p id="isi"></p>
    <script>
        function myfungsi()
        {
            let text = '';
            let k = parseInt(document.getElementById("start").value);
            let m = parseInt(document.getElementById("end").value);
        for ( let = i = k; i < m; i++) {
            text = text + i +"<br>";
        }
        document.getElementById("isi").innerHTML = text;      
        }
    </script>
</body>
</html>