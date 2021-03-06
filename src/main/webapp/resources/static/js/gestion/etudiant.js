app.controller('etudiantController', function($scope, $http, $location, $compile) {

	$scope.table = null;
	$scope.dto = {};
	$scope.filtre = {};
	
	var language = {
			"sProcessing":     "Traitement en cours...",
			"sSearch":         "Rechercher&nbsp;:",
			"sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
			"sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
			"sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
			"sInfoSelected":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
			"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
			"sInfoPostFix":    "",
			"sLoadingRecords": "Chargement en cours...",
			"sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
			"sEmptyTable":     "Aucune donn&eacute;e disponible",
			"oPaginate": {
				"sFirst":      "Premier",
				"sPrevious":   "Pr&eacute;c&eacute;dent",
				"sNext":       "Suivant",
				"sLast":       "Dernier"
			}
	};
	
	$('.pickadate').pickadate();
	
	$scope.initListFiliere = function(){
		$http.get("/gestion/filiere/rest/getAll").then(function (response) {
			$scope.filieres = response.data;
			$scope.filtre.filiere = response.data[0].id;
		}, function error(response) {

		});
	}
	
	$scope.initListGroupe = function(id){
		$http.get("/gestion/groupe/rest/getByFiliere/"+id).then(function (response) {
			$scope.groupes = response.data;
			$scope.filtre.groupe = response.data[0].id;
		}, function error(response) {

		});
	}
	
	$scope.$watch('filtre.filiere', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.initListGroupe(newValue);
		}
		else{
			$scope.groupes = [];
		}
	});
	
	$scope.$watch('filtre.groupe', function(newValue, oldValue) {
		if(!angular.isUndefined(newValue) && newValue != null){
			$scope.table.ajax.url("/gestion/etudiant/rest/list/"+newValue).load();
		}
		else{
			$scope.table.ajax.url("/gestion/etudiant/rest/list/-1").load();
		}
	});
	
	$scope.init = function(){
		$scope.table = $('#etudiantTable').DataTable( {
			"oLanguage" : language,
			"ajax": "/gestion/etudiant/rest/list/-1",
			"columns": [
				{ "data": "id", visible: false},
				{ "data": "nom"},
				{ "data": "prenom"},
				{ "data": "codeMassar"},
				{ "data": "email"},
				{ "data": "tel"},
				{ "width": 160, "render": function ( data, type, row ) {
					var resultat = '<button type="button" class="btn btn-icon btn-outline-warning btn-sm waves-effect waves-light ml-1" ng-click="edit('+row.id+')"><i class="feather icon-edit"></i></button>'
                    +'<button type="button" class="btn btn-icon btn-outline-danger btn-sm waves-effect waves-light ml-1" ng-click="remove('+row.id+')"><i class="feather icon-trash"></i></button>';
                    
                    if(row.valide == true) {
                    	resultat += '<button type="button" class="btn btn-icon btn-outline-light btn-sm waves-effect waves-light ml-1" ng-click="showValidation('+row.id+')" disabled><i class="feather icon-check"></i></button>';
                    }
                    else {
                    	resultat += '<button type="button" class="btn btn-icon btn-outline-primary btn-sm waves-effect waves-light ml-1" ng-click="showValidation('+row.id+')"><i class="feather icon-check"></i></button>';
                    }
                    
                    return resultat;
                    }
				}
			],
			"pageLength": 5,
			"createdRow": function( row, data, dataIndex ) {
				$compile(angular.element(row).contents())($scope);
			}
		} );
		
		
		$scope.initListFiliere();
	}

	$scope.add = function(){
		$scope.dto = {};
		$('#etudiantModal').modal('show');
	}
	
	$scope.edit = function(id){
		$http.get("/gestion/etudiant/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$('#etudiantModal').modal('show');
		}, function error(response) {

		});
	}
	
	$scope.save = function(){
		$scope.dto.groupeId = $scope.filtre.groupe;
		$http.post("/gestion/etudiant/rest/save",$scope.dto).then(function (response) {
			$('#etudiantModal').modal('hide');
			$scope.dto = {};
			$scope.table.ajax.reload();
			toastr.success('Op??ration effectu??e avec succ??s !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
	}

	$scope.remove = function(id) {
		Swal.fire({
		      title: 'Avertissement',
		      type: 'error',
		      html: '??tes-vous s??r de vouloir supprimer ?',
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
		$http.get("/gestion/etudiant/rest/delete/"+id).then(function (response) {
			$scope.table.ajax.reload();
		}, function error(response) {
			
		});
	}
	
	$scope.showValidation = function(id){
		$http.get("/gestion/etudiant/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$('#validationModal').modal('show');
		}, function error(response) {

		});
	}
	
	$scope.validate = function(){
		$http.post("/gestion/etudiant/rest/validate",$scope.dto).then(function (response) {
			$('#validationModal').modal('hide');
			$scope.dto = {};
			$scope.table.ajax.reload();
			toastr.success('Op??ration effectu??e avec succ??s !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
	}

});