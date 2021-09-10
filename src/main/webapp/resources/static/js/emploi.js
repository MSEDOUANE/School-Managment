app.controller('emploiController', function($scope, $http, $location, $compile) {

	$scope.filtre = {};
	$scope.filtre.direction = 'desc';
	
	$scope.editMode = false;
	
	
	$scope.initListFiliere = function(){
		$http.get("/gestion/filiere/rest/getAll").then(function (response) {
			$scope.filieres = response.data;
		}, function error(response) {

		});
	}
	
	$scope.initListGroupe = function(id){
		$http.get("/gestion/groupe/rest/getByFiliere/"+id).then(function (response) {
			$scope.groupes = response.data;
		}, function error(response) {

		});
	}
	
	$scope.initListGroupeF = function(id){
		$http.get("/gestion/groupe/rest/getByFiliere/"+id).then(function (response) {
			$scope.groupesF = response.data;
		}, function error(response) {

		});
	}
	
	$scope.$watch('filtre.filiereId', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.initListGroupe(newValue);
		}
		else{
			$scope.groupes = [];
		}
	});
	
	$scope.$watch('dto.filiereId', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.initListGroupeF(newValue);
		}
		else{
			$scope.groupesF = [];
		}
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
	
	$scope.init = function(){
		
		$scope.initListEmploi();
		
		$scope.initListFiliere();
		
	}
	
	$scope.filtre.page = 1;
	$scope.pages = 1;
	$scope.totalCount = 0;
	
	$scope.initListEmploi = function(){
		$scope.emploiList = [];
		$http.post("/emploi/rest/list", $scope.filtre).then(function (response) {
			$scope.emploiList = response.data.data;
			$scope.totalCount = response.data.totalCount;
			$scope.pages = Math.ceil(response.data.totalCount/6);
			if($scope.pages < $scope.filtre.page) {
				$scope.filtre.page = 1;
			}
			$scope.initPagination($scope.pages, $scope.filtre.page);
		}, function error(response) {
	
		});
	}
	
	$scope.$watchGroup(['filtre.direction', 'filtre.titre', 'filtre.filiereId', 'filtre.groupeId'], function(newValues, oldValues, scope) {
		$scope.filtre.page = 1;
		$scope.initListEmploi();
	});
	
	$scope.$watch('filtre.page', function(newValue, oldValue) {
		$scope.initListEmploi();
	});
	
	$scope.add = function(){
		$scope.dto = {};
		$(".add-new-data").addClass("show");
		$(".overlay-bg").addClass("show");
	}
	
	$scope.read = function(){
		$scope.editMode = false;
	}
	
	$scope.edit = function(){
		$scope.editMode = true;
	}
	
	$scope.load = function(id){
		$http.get("/emploi/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$scope.dto.nomDocument = response.data.nomFichier;
			$(".add-new-data").addClass("show");
			$(".overlay-bg").addClass("show");
		}, function error(response) {

		});
	}
	
	$scope.save = function(){
		$scope.emploiForm.$setSubmitted();
		if ($scope.emploiForm.$valid) {
			var formData = new FormData($("#emploiForm")[0]);
			formData.append("id", $scope.dto.id);
			formData.append("groupeId", $scope.dto.groupeId);
			formData.append("titre", $scope.dto.titre);
			formData.append("description", $scope.dto.description);
			$http({
				url: "/emploi/rest/save",
				method: 'POST',
				data: formData,
				headers: {'Content-Type': undefined},
				transformRequest: angular.identity  
			}).then(function (response) {
				$(".add-new-data").removeClass("show");
				$(".overlay-bg").removeClass("show");
				$scope.dto = {};
				$scope.initListEmploi();
				toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
			}, function error(response) {
				
			});
		}
	}

	$scope.remove = function(id) {
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
		        	$scope.confirmRemove(id);
		        }
		    })
	}
	
	$scope.confirmRemove = function(id) {
		$http.get("/emploi/rest/delete/"+id).then(function (response) {
			$scope.initListEmploi();
			toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
	}

	$scope.upload = function(){
		$('#document').click();
	};
	
	$('#document').on("change" ,function(){
		$scope.selectFile();
	});
	
	$scope.selectFile = function(){
		$scope.dto.nomDocument = $('#document').val().replace(/C:\\fakepath\\/i, '');
		$scope.$apply();
	};
	
	$scope.download = function(id){
		window.open("/emploi/download/"+id, "_self");
//		$scope.initListEmploi();
	};
	
	$scope.preview = function(id, typeFichier){
		if(typeFichier == 'image') {
			document.getElementById("image-view").src = '/emploi/preview/'+id;
			$('#previewModal').modal('show');
		}
	};
	
	$scope.cancelFilter = function(){
		$scope.filtre = {};
		$scope.filtre.direction = 'desc';
	};
	
});