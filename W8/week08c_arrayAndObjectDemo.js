
/* 
 * The goal of this demo is to take in a JSON file from a remote server and do
 * some form of data processing with it. This data is straight from a poorly 
 * designed form, so there is very little data validation to the data
 */ 

const http = require('http');

const url = "http://iankropp.com/heights.json";

http.get(url,(res) => { // res is a function, defined after this arrow
    
    let body = "";

    // Asynchronously retrieve data from the web
    res.on("data", (chunk) => {
        body += chunk;
    });

    // Asynchronously wait around until the the data is done being pulled from 
    // the internet
    res.on("end", () => {
        try {
            let heights = JSON.parse(body);
            let totalHeight = 0;

            /* START: Location of today's demo! */
            for(let h = 0; h < heights.length; h++){
                totalHeight += heights[h]; // is heights a vector?
            }

            console.log("The total of the heights is: " + totalHeight);

            /* END: Location of today's demo! */
          
        } catch (error) {
            console.error(error.message);
        };
    });

    console.log("This will execute first!"); // Proof of asynchronousity 

}).on("error", (error) => {
    console.error(error.message);
});



