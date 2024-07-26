document.querySelector("button").addEventListener("click",foo);
async function foo(){
    try {
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${res}`);
        var data1 = await data.json();
        console.log(data1);
      
        var col= document.createElement("div");
        col.className= "col-sm-12";
        col.innerHTML =`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data1[0].show.image.original}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data1[0].show.name}</h5>
    <p class="card-text">Genre: ${data1[0].show.genres}<br> Premiered: ${data1[0].show.premiered}<br> Rating: ${data1[0].show.rating.average} <br> RunTime: ${data1[0].show.runtime} <br> Show Schedule: ${data1[0].show.schedule.days}, ${data1[0].show.schedule.time} <br> Official Site: ${data1[0].show.officialSite} <br> Network: ${data1[0].show.network.name} <br> Summary: ${data1[0].show.summary}</p>
    
  </div>
</div>`
document.body.append(col);
    } catch (error) {
        console.log(error);
    }
 
    

}