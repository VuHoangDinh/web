
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
            var scheduleid = schedule.getElementsByTagName("TheatreID");
            var dd =  document.getElementById("dd");
            var value = dd.options[dd.selectedIndex].value;
            var arr = new Array(1128693,1128666 )
            
            for (i=0;i< scheduleid.length; i ++){
                if (value = scheduleid && scheduleid == Array.isArray(arr) )
                {
                    var info = scheduleid[i].innerHTML;
                    
                    var name =  schedule.getElementsByTagName("TheatreID")[i].innerHTML;
                    /**var duration = scheduleid[i].parentNode.children[19].innerHTML;
                    var theater = scheduleid[i].parentNode.children[29].innerHTML;
                    var image  = scheduleid[i].parentNode.children[37].children[4].innerHTML;
                    */
                    scheduleid[i].parentNode.className = "hello";
                    var a = document.getElementsByClassName("hello");

                    var table = "<table>";
                    for (i=0; i<a.length;i++ ){
                        
                        table += '<tr>'+'<td>' + name +'</td>';
                        table += '<td>' + duration + '</td>';
                        table += '<td>' + theater + '</td>';
                        table += '<td>' + image + '</td>' + '</tr>';
                        
                       
                    }
                    table += "</table>";



                }
                document.getElementById("schedule").innerHTML = table;
            }


           // if (value == scheduleid){
              //  for (i=0;){
              //  var table = '<table id ="tb">';
                //var movies = schedule.getElementsByTagName("Title");
            //    }
                
          //  }
            //var theater = schedule.getElementsByTagName("");
            

           // if (value =  ){}

        }
    }

}