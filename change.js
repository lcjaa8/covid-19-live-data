$(document).ready(function(){
         
    init()
            function init(){
                var url="https://api.covid19api.com/summary"
            
                 var data=''

                $.get(url,function(data){
                    console.log(data.Global)
                
                data=`
                
                <td>${data.Global.TotalConfirmed}</td>
                <td>${data.Global.TotalDeaths}</td>
                <td>${data.Global.TotalRecovered}</td>
                <td>${data.Global.NewConfirmed}</td>
                <td>${data.Global.NewDeaths}</td>
                <td>${data.Global.NewRecovered}</td>
                
                
            
                `
                 $("#data").html(data)    

                })
            }
          
        })