'use strict';

angular.module('styley2App')
  .controller('NewRequestCtrl', function ($scope, $q, nzTour) {
  	$scope.files=[]
  	$scope.picSelected=0;
	  $scope.loadFiles = function(file, errFiles) {
		  if (file){
		  	console.log(file)
		    $scope.files.push(file);
		    if($scope.files.length==1){
		    	nzTour.start(tour)
		    }
		  }

		}
		$scope.setSelected = function (idSelected) {
   		$scope.picSelected = idSelected;
		};
		$scope.model = []
		$scope.undoDraw = function(){
			$scope.model[$scope.picSelected].version=$scope.model[$scope.picSelected].version-1
		}
		$scope.select= function(color){
    	switch (color){
				case "red": $scope.redPointer = true;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = false;$scope.pencilPointer=false; break;
				case "blue": $scope.redPointer = false;$scope.bluePointer = true;$scope.greenPointer = false;$scope.purplePointer = false;$scope.pencilPointer=false; break;
				case "green": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = true;$scope.purplePointer = false;$scope.pencilPointer=false; break;
				case "purple": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = true;$scope.pencilPointer=false; break;
				case "purple": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = true;$scope.pencilPointer=false; break;     		
    		case "pencil": $scope.redPointer = false;$scope.bluePointer = false;$scope.greenPointer = false;$scope.purplePointer = false;$scope.pencilPointer=true; break; 
    	}
    	if (color=='pencil'){
    		$scope.drawActive=true;
    	}
    	else{
    		$scope.drawActive=false;
    	}
      return false;
    }
    $scope.btnPlaced = [];
    $scope.btnCurrent = [];
    var posTop,posLeft,imgWidth,imgHeight;
    $scope.nbRed=0;
    $scope.nbBlue=0;
    $scope.nbGreen=0;
    $scope.nbPurple=0;
    $scope.meanings = ['Remove','Add','Improve','Colorize','Custom']
    $scope.clickOnImg = function(event){
      if (($scope.redPointer===true)||($scope.bluePointer===true)||($scope.greenPointer===true)||($scope.purplePointer===true)){
        posTop = event.offsetY;
        posLeft =  event.offsetX;
        var pointercolor;
        if ($scope.redPointer === true){pointercolor = 'red'; $scope.nbRed++;}
        if ($scope.bluePointer === true){pointercolor = 'blue'; $scope.nbBlue++;}
        if ($scope.greenPointer === true){pointercolor = 'green'; $scope.nbGreen++;}
        if ($scope.purplePointer === true){pointercolor = 'purple'; $scope.nbPurple++;}
        imgWidth = angular.element(document.querySelector('#pictureZone')).prop('width');
        imgHeight = angular.element(document.querySelector('#pictureZone')).prop('height');
        $scope.btnCurrent.push({'posTop': angular.element(document.querySelector('#pictureZone')).prop('offsetTop') + posTop,'posLeft': angular.element(document.querySelector('#pictureZone')).prop('offsetLeft') + posLeft,'imgPos' : $scope.picSelected, 'color' : pointercolor});
        $scope.btnPlaced.push({'posTop': posTop,'posLeft': posLeft,'width': imgWidth, 'height': imgHeight,'imgPos' : $scope.picSelected, 'color' : pointercolor});
        $scope.redPointer = false;
        $scope.bluePointer = false;
        $scope.greenPointer = false;
        $scope.purplePointer = false;
      }
    };
    $scope.removePlaced = function(index){
    	switch ($scope.btnPlaced[index].color){
    		case "red": $scope.nbRed --;break
    		case "green": $scope.nbGreen --;break
    		case "blue": $scope.nbBlue --;break
    		case "purple": $scope.nbPurple --;break

    	}
      $scope.btnPlaced.splice(index,1);
      $scope.btnCurrent.splice(index,1);
    };



		var tour = {
		    config: {}, // see config
		    steps: [{
		        target: '.symbolstodrag',
		        content: 'With these tools, you can mark everything you want on your pictures'
		    }, {
		        target: '.pictureZone',
		        content: 'If you place a dot on a picture...',
    	      before: function() {
    	      	var d = $q.defer();
              $scope.btnCurrent.push({'posTop': 200,'posLeft': 200,'width': imgWidth, 'height': imgHeight,'imgPos' : 0, 'color' : 'red'})
            	$scope.nbRed++;
            	d.resolve();
              return d.promise;
            }
		    },{
		        target: '.meaningred',
		        content: '...you can precise what this mark mean.'
		    },{
		        target: '.pencilcustombtn',
		        content: 'If you prefer, you can draw freely on your pictures...'
		    },{
		        target: '.meaningglobal',
		        content: '...and describe what you want here.'
		    },{
		        target: '.meaningtags',
		        content: 'Don\'t forget to set keywords for your request, to help artists find it!'
		    },{
		        target: '',
		        content: 'Have fun :)',
						after: function(){
							var d = $q.defer();
							$scope.btnCurrent=[]
							$scope.nbRed=0;
							d.resolve();
              return d.promise;
						}
		    }]
		};

  });
