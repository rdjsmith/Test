$.getJSON('sizes.json', function(data)  {
    $('a#unitlink').click(function(){
        window.open('url', 'window name', 'window settings');
        return false;
    });
    
    var uom = '';
    var lastuom = '';
    var output = '<table id="unitsofmeasure">';
        output += '<tr>';
        output += '<td>Unit</td>';
        output += '<td>Size</td>';
        output += '<td>Length</td>';
        output += '<td>Chest</td>';
        output += '<td>Waist</td>';
        output += '<td>Shoulder</td>';
        output += '<td>Sleeve</td>';
        output += '<td>Hip</td>';
        output += '<td>Neck</td>';
        output += '<td>Height</td>';
        output += '<td>Weight</td>';
        output += '</tr>';
    $.each(data, function(key, val) {
        output += '<tr>';
        uom = val.Unit;
        if (uom !== lastuom) {
//            output += '<td>&nbsp;</td>';
//        } else {
            if (uom == 'InchLb') {output += '<td rowspan=10>Inches - Lbs</td>';}
            if (uom == 'CmKg') {output += '<td rowspan=10>Cms - Kgs</td>';}
        }
        output += '<td>' + val.Size + '</td>';
        output += '<td>' + val.Length + '</td>';
        output += '<td>' + val.Chest + '</td>';
        output += '<td>' + val.Waist + '</td>';
        output += '<td>' + val.Shoulder + '</td>';
        output += '<td>' + val.Sleeve + '</td>';
        output += '<td>' + val.Hip + '</td>';
        output += '<td>' + val.Neck + '</td>';
        output += '<td>' + val.Height + '</td>';
        output += '<td>' + val.Weight + '</td>';
        output += '</tr>'
        lastuom = val.Unit;
    });
    output += '</tr>';
    output += '</table>';
    $('#update').html(output);
//    console.log(data);
});