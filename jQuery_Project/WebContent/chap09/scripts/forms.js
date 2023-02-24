$(function(){
	$('.quantity input').change(function(){
		var totalCost = 0;
		var totalQuantity = 0;
		
		
		$('table tbody tr').each(function(index){
			var price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/, ''));
			price = isNaN(price) ? 0 : price;
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			var cost = price * quantity;
			
			$(this).find('.cost').text('$' + cost.toFixed(2));
			
			totalCost += cost;
			totalQuantity += quantity;
			
			var tax = tatalCost * 0.6;
		});
		
		$('.subtotal .cost').text('$' + totalCost.toFixed(2));
		$('.shipping .quantity').text(totalQuantity);
		$('.subtotal .tax').text(tax);
	});
	
	
});



