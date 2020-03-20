function getData(){
    fetch("https://danepubliczne.imgw.pl/api/data/synop" )
        .then(response => response.json())
        .then(data => {
            console.log(data);
                data.forEach(function(temp) {
                let firstItem = document.createElement("li");
                firstItem.innerText = " ID stacji: " + temp.id_stacji + " W miescie " + temp.stacja + " jest obecnie " + temp.temperatura;
                if (temp.temperatura<10){
                    firstItem.classList.add("low-temperature")
                } 
                if (temp.temperatura>10){
                    firstItem.classList.add("high-temperature")
                }
               /*  let idStacji = document.createElement("p");
                idStacji.innerText = temp.id_stacji; 

                let stacja = document.createElement("p");
                stacja.innerText = temp.stacja;

                let temperatura = document.createElement("p");
                temperatura.innerText = temp.temperatura;
                temperatura.classList.add("show-temp")

                firstItem.appendChild(idStacji);
                firstItem.appendChild(stacja);
                firstItem.appendChild(temperatura); */
                document.getElementById("temperature-list").appendChild(firstItem); 
            }

)})}


getData();