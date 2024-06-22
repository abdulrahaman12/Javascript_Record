// XML HTTP REQUEST is heavily used in ajax

// xhr.unsent - initiates a request but not yet opened.
// xhr.open - initiates an request but not yet opened.
// xhr.loading - response is received , the response has a partial data.
// xhr.done - Request is complete and entore response is available.
// xhr.onreadystatechange - It goes through a series of states during the life cycle of an XHR request.
// xhr.send - Actually sends an request to get the api data.

// Note : Should run this in the HTML file not in the node environment.

const  xhr = new XMLHttpRequest();
const requestURL = "https://jsonplaceholder.typicode.com/posts"
xhr.open('GET',requestURL)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        // Will receive the data in strings so have to beautify the JSON.
        const data = JSON.parse(this.responseText);
       console.log(data.id);
    }
}
xhr.send();