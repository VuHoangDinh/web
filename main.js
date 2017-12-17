
function getTheater(){
    var url = "http://www.finnkino.fi/xml/TheatreAreas/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    

    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var theaters = xmlhttp.responseXML;
            var names = theaters.getElementsByTagName("Name");
            var id = theaters.getElementsByTagName("ID");
            
            var dropdown = '<select id="dd">';
            for (i=0 ; i<names.length; i++){
                dropdown += '<option>' + names[i].innerHTML + '</option>'; 
                
            }
            

            dropdown += '</select>';
            
            document.getElementById("theaterlist").innerHTML = dropdown;
            var dd = document.getElementById("dd");
            for (i=0;i< dd.length;i++){
                dd[i].value = id[i].innerHTML;
            }

            //document.getElementById("theaterlist").innerHTML = xmlhttp.responseText;
        }
    }
}

function showMovie(){
    var url = "http://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var schedule = xmlhttp.responseXML;
            var movies = schedule.getElementsByTagName("TheatreID");
            var dd =  document.getElementById("dd");
            var selectedTheaterId = dd.options[dd.selectedIndex].value;
            
            var table = "<table>";
      
            for (i=0;i< movies.length; i ++){
                var name =  movies[i].parentNode.children[15].innerHTML;
                var duration = movies[i].parentNode.children[18].innerHTML;
                var theater = movies[i].parentNode.children[27].innerHTML;
                var image  = movies[i].parentNode.children[35].children[4].innerHTML;
                table += '<tr>'+'<td>' + name +'</td>';
                table += '<td>' + duration + '</td>';
                table += '<td>' + theater + '</td>';
                table += '<td>' + image + '</td>' + '</tr>';
            }
            table += "</table>";
            document.getElementById("schedule").innerHTML = table;
        }
    }

}