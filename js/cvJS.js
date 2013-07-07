$(function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable btn btn-primary" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
  });

//Hides CV
  $("#cvBox div").hide();

  $("#cvBox span").hide();


  


  

//Search function
  var showcvBox = function(searchphrase) {
  var check = 0
  $("#cvBox div").hide();

  for (i=0; i<keyTerm.length; i=i+1)
    {
    if(keyTerm[i].toUpperCase().indexOf(searchphrase.toUpperCase())>-1)
      { 
      $("#" + cvBlock[i] + "").slideDown(3000);
      check = 1
      }
    }

  var cvWidth = $("#cvBox").width()
  var wWidth = parseFloat(document.documentElement.clientWidth);     

  document.getElementById('cvBox').style.left = (((wWidth-cvWidth)/2).toString() + "px"); 
  
  if (check == 0 ) {
      alert("Your search came up empty." )
  }
} 

//Hover Effects
var eduHoverDisplay = function() {
  $("#eduHover").fadeIn(250);
}
var eduHoverHide = function() {
  $("#eduHover").fadeOut(250);    
}

var jobHoverDisplay = function() {
  $("#jobHover").fadeIn(250);
}
var jobHoverHide = function() {
  $("#jobHover").fadeOut(250);    
}

var randomHoverDisplay = function() {
  $("#randomHover").fadeIn(250);
}
var randomHoverHide = function() {
  $("#randomHover").fadeOut(250);    
}

var skillsHoverDisplay = function() {
  $("#skillsHover").fadeIn(250);
}
var skillsHoverHide = function() {
  $("#skillsHover").fadeOut(250);    
}

//CV keys
    var cvBlock = new Array
    var keyTerm = new Array
      
      cvBlock[0] = "usc" ; keyTerm [0] = "Southern California Los Angeles USC SC education";
  
      cvBlock[1] = "teaching" ; keyTerm [1] = "tutoring korea english SAT math "
  
      cvBlock[2] = "uscTA" ; keyTerm [2] = "USC teaching itp html programming css user experience  web design webdesign ta assistant";
  
      cvBlock[3] = "cft" ; keyTerm [3] = "california voting la orange county leadership";
      
      cvBlock[4] = "abcs" ; keyTerm [4] = "natalie Pace financial literacy webdesign design game javascript";
      
      cvBlock[5] = "prog" ; keyTerm [5] = "tech usc webdev programming languages python ";
      
      cvBlock[6] = "skills" ; keyTerm [6] = "coding microsoft excel office adobe skills";

      cvBlock[7] = "pets" ; keyTerm [7] = "molly catson shih tzu tabby baby yorkie hate yorkies";
  
      cvBlock[8] = "foreignLanguages" ; keyTerm [8] = "korean italian spanish english";


//Select All
var allCheck_flag = false;

  var allCheck = function() {
    if (allCheck_flag == false) {
        allDisplay();
    }
    else {
        allHide();
    }
  } 
  
  var allDisplay = function() {
    $("#uscTA").slideDown(1000);
    $("#abcs").slideDown(1000);
    $("#cft").slideDown(1000);
    $("#teaching").slideDown(1000);
    $("#usc").slideDown(1000);
    $("#bc").slideDown(1000);
    $("#skills").slideDown(1000);
    $("#pets").slideDown(1000);
    $("#languages").slideDown(1000);
    $("#allSelect").attr("class", "ui-selecting")    
    allCheck_flag = true;
  };

  var allHide = function() {
    $("#uscTA").slideUp(1000);
    $("#abcs").slideUp(1000);
    $("#cft").slideUp(1000);
    $("#teaching").slideUp(1000);
    $("#usc").slideUp(1000);
    $("#bc").slideUp(1000);
    $("#skills").slideUp(1000);
    $("#pets").slideUp(1000);
    $("#languages").slideUp(1000);
    $("#allSelect").attr("class", "ui-selected")   
  };


//Deselecting
  var allDeSelectCheck_flag = false;

  var allDeSelectCheck = function() {
    if (allDeSelectCheck_flag == false) {
        allDeSelect();
    }
    else {
        allDeSelect();
    }
  } 
  
  var allDeSelect = function() {
    $("#uscTA").slideUp(1000);
    $("#abcs").slideUp(1000);
    $("#cft").slideUp(1000);
    $("#teaching").slideUp(1000);
    $("#usc").slideUp(1000);
    $("#bc").slideUp(1000);
    $("#skills").slideUp(1000);
    $("#pets").slideUp(1000);
    $("#languages").slideUp(1000);
    $("#allSelect").attr("class", "ui-selected")   
    allDeSelect_flag = false;
  };

//Education 
var eduCheck_flag = false;

var eduCheck = function() {
  if (eduCheck_flag == false) {
      eduDisplay();
  }
  else {
      eduHide();
  }
}

var eduDisplay = function() {
  $("#usc").slideDown(1000);
  $("#bc").slideDown(1000);
  $("#eduSelect").attr("class", "ui-selecting")
  eduCheck_flag = true
};

var eduHide = function() {
 $("#usc").slideUp(1000);
 $("#bc").slideUp(1000);
 $("#eduSelect").attr("class", "ui-selected")   
 eduCheck_flag = false;
};
  
//Experience
var jobCheck_flag = false;
  var jobCheck = function() {
    if (jobCheck_flag == false) {
        jobDisplay();
    }
    else {
        jobHide();
    }
  }

var jobDisplay = function() {

  $("#cft").slideDown(1000);
  $("#teaching").slideDown(1000);
  $("#uscTA").slideDown(1000);
  $("#abcs").slideDown(1000);
  $("#jobSelect").attr("class", "ui-selecting")    
  jobCheck_flag = true
};

var jobHide = function() {
  $("#uscTA").slideUp(1000);
  $("#cft").slideUp(1000);
  $("#teaching").slideUp(1000);
  $("#abcs").slideUp(1000);
  $("#jobSelect").attr("class", "ui-selected")       
  jobCheck_flag = false;
};

//Personal
var randomCheck_flag = false;

var randomCheck = function() {
  if (randomCheck_flag == false) {
      randomDisplay();
  }
  else {
      randomHide();
  }
}

  var randomDisplay = function() {
  $("#pets").slideDown(1000);
  $("#languages").slideDown(1000);
  $("#randomSelect").attr("class", "ui-selecting")    
  randomCheck_flag = true;
};

var randomHide = function() {
  $("#pets").slideUp(1000);
  $("#languages").slideUp(1000);
  $("#randomSelect").attr("class", "ui-selected")   
  randomCheck_flag = false;   
};



  
//Tutoring

  var teachingCheck_flag = false;

  var teachingCheck = function() {
    if (teachingCheck_flag == false) {
        teachingDisplay();
    }
    else {
        teachingHide();
    }
  } 

  var teachingDisplay = function() {
    $("#teaching").slideDown(1000);
    $("#uscTA").slideDown(1000);
    $("#teachingSelect").attr("class", "ui-selecting")    
    teachingCheck_flag = true;
  };

  var teachingHide = function() {
    $("#teaching").slideUp(1000);
    $("#uscTA").slideUp(1000);
    $("#teachingSelect").attr("class", "ui-selected")   
    teachingCheck_flag = false;  
  };

//Programming/Skills

  var progCheck_flag = false;

  var progCheck = function() {
    if (progCheck_flag == false) {
        progDisplay();
    }
    else {
        progHide();
    }
  } 

  var progDisplay = function() {
    $("#skills").slideDown(1000);   

    $("#progSelect").attr("class", "ui-selecting")    
    progCheck_flag = true;
  };
  
  var progHide = function() {
 
    $("#skills").slideUp(1000);  
    $("#progSelect").attr("class", "ui-selected")   
    progCheck_flag = false;
  };
