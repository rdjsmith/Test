$(document).ready( function() {
    
    $.getJSON("sizes.json", function(data) {
        
        var output = '<ul class="sizelist">';
        $.each(data, function(key, val) {
            output += '<li>';
            output += val.Unit;
            output += '</li>';
            output += '<li>';
            output += val.Size;
            output += '</li>';
            output += '<li>';
            output += val.Length;
            output += '</li>';
            output += '<li>';
            output += val.Chest;
            output += '</li>';
            output += '<li>';
            output += val.Waist;
            output += '</li>';
            output += '<li>';
            output += val.Shoulder;
            output += '</li>';
            output += '<li>';
            output += val.Sleeve;
            output += '</li>';
            output += '<li>';
            output += val.Hip;
            output += '</li>';
            output += '<li>';
            output += val.Height;
            output += '</li>';
            output += '<li>';
            output += val.Weight;
            output += '</li>';
            
        }); //$.each
        output += '</ul>';
		
        }); //getJSON
		
}); // ready