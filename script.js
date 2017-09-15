// This script should be run directly in your browser.
// For chrome, navigate to http://digtizedmedievalmanuscripts.org/app and open the console - F12
//Copy-paste the script

//THIS SCRIPT REQUIRES JQUERY

$.getJSON("/app/js/data.json", function (dmmJSON) {


    $.each(dmmJSON, function (index, element) {
        
        document.write('<a href=" ' + element.Website + '">DMMapp Link for testing</a><br/>');
    });


});