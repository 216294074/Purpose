var counter = 0;



$('button').click(function(){
    counter = counter + 1;
var age = parseInt($('.age').val());
 var purpose= $(".purpose").val();
   $("p").text("The form is submitted " + counter + " times");
      if(age <= 25 && purpose=== 'Find Happiness') {
      $("p").append("<img src=\"https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2018-09/happiness.jpg\"><p class=\"dontknow\">You might need to set a better goal because happiness itself is not a permanent state, spend sometime alone with yoursel and ask questions.</p>");
    }
     else if(age <= 25 && purpose=== 'Strive to discover') {
      $("p").append("<img src=\"https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-seo-realities-seos-struggle-with-most-5deb53bc7e246-1520x800.png\"><p class=\"dontknow\">You will live a happy, peaceful, and purposeful life because life is all struggle</p>");
    }
    
     else if(age <= 25 && purpose=== 'To be successful') {
      $("p").append("<img src=\"https://www.job-hunt.org/images/2019-02-23-fotomek-AdobeStock_136048151.jpeg\"><p class=\"dontknow\">Success is the state or condition of meeting a defined range of expectations.Will your success last forever? </p>");
    }
 
     else if(age <= 25 && purpose=== "Don't know") {
      $("p").append("<img src=\"https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg\"><p class=\"dontknow\">You still have time to find it. And remember that time demands its toll</p>");
    }
    else{  $("p").append("<p class=\"dontknow\">Explore new things in Life!</p>");
    
    }
    
});