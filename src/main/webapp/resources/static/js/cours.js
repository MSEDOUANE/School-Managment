app.controller('coursController', function($scope, $http, $location, $compile) {

	$scope.filtre = {};
	$scope.filtre.direction = 'desc';
	
	$scope.editMode = false;
	
	
	$scope.initListFiliere = function(){
		$http.get("/gestion/filiere/rest/getAll").then(function (response) {
			$scope.filieres = response.data;
		}, function error(response) {

		});
	}
	
	$scope.initListModule = function(id){
		$http.get("/gestion/module/rest/getByFiliere/"+id).then(function (response) {
			$scope.modules = response.data;
		}, function error(response) {

		});
	}
	
	$scope.initListModuleF = function(id){
		$http.get("/gestion/module/rest/getByFiliere/"+id).then(function (response) {
			$scope.modulesF = response.data;
		}, function error(response) {

		});
	}
	
	$scope.$watch('filtre.filiereId', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.initListModule(newValue);
		}
		else{
			$scope.modules = [];
		}
	});
	
	$scope.$watch('dto.filiereId', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.initListModuleF(newValue);
		}
		else{
			$scope.modulesF = [];
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
		
		$scope.initListCours();
		
		$scope.initListFiliere();
		
	}
	
	$scope.filtre.page = 1;
	$scope.pages = 1;
	$scope.totalCount = 0;
	
	$scope.initListCours = function(){
		$scope.coursList = [];
		$http.post("/cours/rest/list", $scope.filtre).then(function (response) {
			$scope.coursList = response.data.data;
			$scope.totalCount = response.data.totalCount;
			$scope.pages = Math.ceil(response.data.totalCount/5);
			if($scope.pages < $scope.filtre.page) {
				$scope.filtre.page = 1;
			}
			$scope.initPagination($scope.pages, $scope.filtre.page);
		}, function error(response) {
	
		});
	}
	
	$scope.$watchGroup(['filtre.direction', 'filtre.titre', 'filtre.filiereId', 'filtre.moduleId'], function(newValues, oldValues, scope) {
		$scope.filtre.page = 1;
		$scope.initListCours();
	});
	
	$scope.$watch('filtre.page', function(newValue, oldValue) {
		$scope.initListCours();
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
		$http.get("/cours/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$scope.dto.nomDocument = response.data.nomFichier;
			$(".add-new-data").addClass("show");
			$(".overlay-bg").addClass("show");
		}, function error(response) {

		});
	}
	
	$scope.save = function(){
//		$scope.dto.groupeId = $scope.filtre.groupe;
//		$http.post("/cours/rest/save",$scope.dto).then(function (response) {
//			$(".add-new-data").removeClass("show");
//			$(".overlay-bg").removeClass("show");
//			$scope.dto = {};
//			$scope.initListCours();
//			toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
//		}, function error(response) {
//			
//		});
		
		$scope.coursForm.$setSubmitted();
		if ($scope.coursForm.$valid) {
			var formData = new FormData($("#coursForm")[0]);
			formData.append("id", $scope.dto.id);
			formData.append("moduleId", $scope.dto.moduleId);
			formData.append("titre", $scope.dto.titre);
			formData.append("description", $scope.dto.description);
			$http({
				url: "/cours/rest/save",
				method: 'POST',
				data: formData,
				headers: {'Content-Type': undefined},
				transformRequest: angular.identity  
			}).then(function (response) {
				$(".add-new-data").removeClass("show");
				$(".overlay-bg").removeClass("show");
				$scope.dto = {};
				$scope.initListCours();
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
		$http.get("/cours/rest/delete/"+id).then(function (response) {
			$scope.initListCours();
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
		window.open("/cours/download/"+id, "_self");
//		$scope.initListCours();
	};
	
	$scope.preview = function(id, typeFichier){
		if(typeFichier == 'video') {
			document.getElementById("video-player").src = '/cours/preview/'+id;
			document.getElementById("video-player").load();
			$('#previewModal').modal('show');
		}
	};
	
	$('.modal').on('hidden.bs.modal', function () {
		document.getElementById("video-player").src = '';
		document.getElementById("video-player").load();
	});
	
	$scope.cancelFilter = function(){
		$scope.filtre = {};
		$scope.filtre.direction = 'desc';
	};
	
});