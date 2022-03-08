/**
 Checking links and mark dead links

 Example: <body onLoad="checkLinks();">
*/
// https://www.eviltester.com/blog/eviltester/javascript/in-browser-automation/writing-a-link-checker-in-the-browser/
var links;
var linkReport = [];
var linksChecked=0;
var icon_fail	= "&#x274C;"
var icon_ok		= "&#x2705;"
var icon_wish	= "&#129310;"

function checkLinks( timeout = 5000 ) {

/*
var links = document.querySelectorAll("a");
var linkReport = [];
var linksChecked=0;
*/
links = document.querySelectorAll("a");
linkReport = [];
linksChecked=0;
links.forEach(function(link){
	var status=true;
    var reportLine = {url: link.getAttribute('href'), status:0, redirectedTo: "", message : "", element : link};
    linkReport.push(reportLine);

    console.log("HEAD " + reportLine.url);
	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeout);

    fetch(reportLine.url, {
      method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
	  mode: 'no-cors',
	  signal: controller.signal,
      redirect: 'follow'
    })
    .then(function(response) {
        linksChecked++;
        reportLine.status=response.status;
        reportLine.message= response.statusText + " | " + 
                            response.type + " | " + 
                            (response.message || "") + " | " +                            
                            JSON.stringify(response.headers) ;

        if(response.redirected){
            reportLine.redirectedTo = response.url;
        }
        console.table(response);
		
        }
    )
    .catch(function(error){
        reportLine.message = error;
        console.table(error);
		console.log(link.getAttribute('id'));
		document.getElementById( "status_" + link.getAttribute('id')).innerHTML = icon_fail;
		document.getElementById( link.getAttribute('id') ).setAttribute("title", "SORRY no title");
		document.getElementById( link.getAttribute('id') ).style.setProperty("text-decoration", "line-through");
        linksChecked++;
		status=false;
    })
	.finally(function() {
        isLoading = false;
		if (status)  {
			document.getElementById( "status_" + link.getAttribute('id')).innerHTML = icon_ok;
		}
    });

});
}
function imgreport(links){    
    links.forEach(function(link){
            if(link.status==0){
                // trigger error messages with status 
                // to the console for status of 0
                var img = new Image();
                img.src = link.url;
            }
        }
    );
}

var finishReport = setInterval(
                        function(){linksChecked=false;if(linksChecked>=linkReport.length){
                            console.table(linkReport);
                            imgreport(linkReport);
                            clearInterval(finishReport);
                            }}
                        , 3000);

