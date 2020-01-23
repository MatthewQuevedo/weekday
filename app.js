window.onload = function () {
    var weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
    document.getElementById("searchweekday").addEventListener('click', findweekday);
    document.getElementById("searchleap").addEventListener('click', findleap);
    
    function findweekday (e) {
        var month = Number(document.getElementById("month").value);
        var day = Number(document.getElementById("day").value);
        var year = Number(document.getElementById("year").value);
        
        if(month == 1 || month == 2){
            month = month + 12;
            year = year - 1;
        }
        
        var dayofweek = (day + Math.floor(26 * (month + 1) / 10) + (year % 100) + Math.floor((year % 100) / 4) + Math.floor((year / 100) / 4) + (5 * Math.floor(year / 100))) % 7;
        
        var output = document.getElementById("weekdayoutput");
        output.innerHTML = weekdays[dayofweek];
        console.log(weekdays[dayofweek]);
        
    }
    
    function findleap (e) {
        var year = Number(document.getElementById("leap").value);
        var output = document.getElementById("leapoutput");
        
        if ((year % 4 == 0 &&  year % 100 != 0) || (year % 400 == 0)){
            output.innerHTML = year + " is a leap year";
        }
        else {
            output.innerHTML = year + " is not a leap year";
        }
    }
    
}