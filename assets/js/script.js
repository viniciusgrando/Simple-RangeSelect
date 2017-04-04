var rangeValues =
	{
	    "1": "R$ 85,00",
	    "2": "R$ 140,00",
	    "3": "R$ 230,00",
	    "4": "R$ 325,00",
	    "5": "R$ 400,00",
	    "6": "R$ 730,00"
	};
	var rangePlan =
	{
	    "1": "Plano 100 GB",
	    "2": "Plano 250 GB",
	    "3": "Plano 500 GB",
	    "4": "Plano 750 GB",
	    "5": "Plano 1000 GB",
	    "6": "Plano 2000 GB"
	};
var redirectValues =
	{
	    "1": "contato.php?plano_dedicado=Plano-100GB",
	    "2": "contato.php?plano_dedicado=Plano-250GB",
	    "3": "contato.php?plano_dedicado=Plano-500GB",
	    "4": "contato.php?plano_dedicado=Plano-750GB",
	    "5": "contato.php?plano_dedicado=Plano-1000GB",
	    "6": "contato.php?plano_dedicado=Plano-2000GB"
	};

	$(function () {

	    $('#rangeResultado').text(rangeValues[$('#rangeInput').val()]);

	    $('#rangeInput').on('input change', function () {
	        $('#rangeResultado').text(rangeValues[$(this).val()]);
	        $('#rangePlano').text(rangePlan[$(this).val()]);
	        $('.button-contratar').attr( 'href', redirectValues[$(this).val()]);
	    });

});

