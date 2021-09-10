app.controller('enseignantController', function($scope, $http, $location, $compile) {

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
	
	$scope.init = function(){
		$scope.table = $('#enseignantTable').DataTable( {
			"oLanguage" : language,
			"ajax": "/gestion/enseignant/rest/list",
			"columns": [
				{ "data": "id", visible: false},
				{ "data": "nom"},
				{ "data": "prenom"},
				{ "data": "email"},
				{ "data": "tel"},
				{ "width": 90, "render": function ( data, type, row ) {
                    return '<button type="button" class="btn btn-icon btn-outline-warning btn-sm waves-effect waves-light ml-1" ng-click="edit('+row.id+')"><i class="feather icon-edit"></i></button>'
                    +'<button type="button" class="btn btn-icon btn-outline-danger btn-sm waves-effect waves-light ml-1" ng-click="remove('+row.id+')"><i class="feather icon-trash"></i></button>';
                    }
				}
			],
			"pageLength": 5,
			"createdRow": function( row, data, dataIndex ) {
				$compile(angular.element(row).contents())($scope);
			}
		} );
	}

	$scope.add = function(){
		$scope.dto = {};
		$('#enseignantModal').modal('show');
	}
	
	$scope.edit = function(id){
		$http.get("/gestion/enseignant/rest/load/"+id).then(function (response) {
			$scope.dto = response.data;
			$('#enseignantModal').modal('show');
		}, function error(response) {

		});
	}
	
	$scope.save = function(){
		$scope.dto.groupeId = $scope.filtre.groupe;
		$http.post("/gestion/enseignant/rest/save",$scope.dto).then(function (response) {
			$('#enseignantModal').modal('hide');
			$scope.dto = {};
			$scope.table.ajax.reload();
			toastr.success('Opération effectuée avec succès !', 'Notification', { "closeButton": true });
		}, function error(response) {
			
		});
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
		$http.get("/gestion/enseignant/rest/delete/"+id).then(function (response) {
			$scope.table.ajax.reload();
		}, function error(response) {
			
		});
	}

});