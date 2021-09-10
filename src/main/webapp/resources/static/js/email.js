app.controller('emailController', function($scope, $http, $location, $compile) {
	
	$scope.dto = {};
	$scope.data = {};
	$scope.filtre = {};
	$scope.filtre.direction = 'desc';
	$scope.filtre.category = 'R';
	$scope.users = [];
	$scope.idListR = [];
	$scope.idListS = [];
	
	
	$(".select2").select2({
		dropdownAutoWidth: true,
	    width: '100%'
	});
	
	$scope.initPagination = function(tp, sp) {
		if(tp == 0) tp = 1;
		$('.page1-links').twbsPagination({
		    totalPages: tp,
		    visiblePages: 5,
		    prev: ' ',
		    next: ' ',
		    first: null,
		    last: null,
		    startPage: sp,
		    onPageClick: function (event, page) {
		    	$scope.$apply( function() {
		    		$scope.filtre.page = page;
		        });
		    }
		  });
	};
	
	$scope.countReceived = function(){
		$http.get("/email/rest/getCount/received").then(function (response) {
			$scope.data.countReceived = response.data;
		}, function error(response) {

		});
	}
	
	$scope.countSent = function(){
		$http.get("/email/rest/getCount/sent").then(function (response) {
			$scope.data.countSent = response.data;
		}, function error(response) {

		});
	}
	
	$scope.getUsers = function(){
		$http.get("/administration/utilisateur/rest/getAll").then(function (response) {
			$scope.users = response.data;
		}, function error(response) {

		});
	}
	
	$scope.filterByCategory = function(category){
		$scope.filtre.category = category;
	}
	
	$scope.init = function(){
		
		$scope.initListEmail();
		
		$scope.getUsers();
		
	}
	
	$scope.filtre.page = 1;
	$scope.pages = 1;
	$scope.totalCount = 0;
	
	$scope.initListEmail = function(){
		$scope.emailList = [];
		$http.post("/email/rest/list", $scope.filtre).then(function (response) {
			$scope.emailList = response.data.data;
			$scope.totalCount = response.data.totalCount;
			$scope.pages = Math.ceil(response.data.totalCount/5);
			if($scope.pages < $scope.filtre.page) {
				$scope.filtre.page = 1;
			}
			$scope.initPagination($scope.pages, $scope.filtre.page);
		}, function error(response) {
	
		});
		
		$scope.countReceived();
		$scope.countSent();
	}
	
	$scope.$watchGroup(['filtre.direction', 'filtre.objet', 'filtre.category'], function(newValues, oldValues, scope) {
		$scope.filtre.page = 1;
		$scope.initListEmail();
	});
	
	$scope.$watch('filtre.page', function(newValue, oldValue) {
		$scope.initListEmail();
	});
	
	$scope.$watch('dto.id', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			if($scope.filtre.category == 'R') {
				$scope.dto.utilisateurId = $scope.dto.envoyeParId;
				$scope.dto.utilisateurLibelle = $scope.dto.envoyeParLibelle;
			}
			else if($scope.filtre.category == 'S') {
				$scope.dto.utilisateurId = $scope.dto.destinataireId;
				$scope.dto.utilisateurLibelle = $scope.dto.destinataireLibelle;
			}
		}
	});
	
	$scope.$watch('dto.destinataireList', function(newValue, oldValue) {
		console.log(newValue);
	});
	
	$scope.add = function(){
		$scope.dto = {};
		$('.ql-editor').text('');
		$('#emailModal').modal('show');
	}
	
	$scope.load = function(id){
		$http.get("/email/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$('#emailDetails').toggleClass('show');
		}, function error(response) {

		});
	}
	
	$scope.save = function(){
		$scope.dto.message = $('#editor').text();
		$http.post("/email/rest/save",$scope.dto).then(function (response) {
			$('#emailModal').modal('hide');
			$scope.dto = {};
			$('.ql-editor').text('');
			$scope.initListEmail();
			toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
	}

	$scope.remove = function() {
		if($scope.filtre.category == 'R') {
			if($scope.idListR.length > 0) {
				Swal.fire({
				      title: 'Avertissement',
				      type: 'error',
				      html: 'Êtes-vous sûr de vouloir supprimer ?',
				      showCloseButton: true,
				      showCancelButton: true,
				      focusConfirm: false,
				      confirmButtonText: 'Confirmer',
				      cancelButtonText: 'Annuler',
				      confirmButtonClass: 'btn btn-danger',
				      cancelButtonClass: 'btn btn-default',
				    }).then(function (result) {
				        if (result.value) {
				        	$scope.confirmRemove();
				        }
				    })
			}
			else {
				toastr.warning('Veuillez sélectionner un élément !', 'Avertissement', { "closeButton": true });
			}
		}
		else if($scope.filtre.category == 'S') {
			if($scope.idListS.length > 0) {
				Swal.fire({
				      title: 'Avertissement',
				      type: 'error',
				      html: 'Êtes-vous sûr de vouloir supprimer ?',
				      showCloseButton: true,
				      showCancelButton: true,
				      focusConfirm: false,
				      confirmButtonText: 'Confirmer',
				      cancelButtonText: 'Annuler',
				      confirmButtonClass: 'btn btn-danger',
				      cancelButtonClass: 'btn btn-default',
				    }).then(function (result) {
				        if (result.value) {
				        	$scope.confirmRemove();
				        }
				    })
			}
			else {
				toastr.warning('Veuillez sélectionner un élément !', 'Avertissement', { "closeButton": true });
			}
		}
	}
	
	$scope.confirmRemove = function() {
		if($scope.filtre.category == 'R') {
			$scope.dto.idListS = [];
			$scope.dto.idListR = $scope.idListR;
		}
		else if($scope.filtre.category == 'S') {
			$scope.dto.idListR = [];
			$scope.dto.idListS = $scope.idListS;
		}
		
		$http.post("/email/rest/delete/list",$scope.dto).then(function (response) {
			$scope.initListEmail();
			toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
		
	}
	
	$scope.checked = function (id) {
		if($scope.filtre.category == 'R') {
			return $scope.idListR.indexOf(id) > -1;
		}
		else if($scope.filtre.category == 'S') {
			return $scope.idListS.indexOf(id) > -1;
		}
	};

	$scope.toggleChecked = function (id) {
		if($scope.filtre.category == 'R') {
			var index = $scope.idListR.indexOf(id);
			if (index > -1) {
				$scope.idListR.splice(index, 1);
			} else {
				$scope.idListR.push(id);
			}
		}
		else if($scope.filtre.category == 'S') {
			var index = $scope.idListS.indexOf(id);
			if (index > -1) {
				$scope.idListS.splice(index, 1);
			} else {
				$scope.idListS.push(id);
			}
		}
	};
	
});