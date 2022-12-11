$(document).ready(() => {
    $('#personas').hide();

    $('#importarJson').click(function() {
        $.ajax({
            type: 'GET',
            url: 'data.json',
            dataType: 'json'
        }).done((data) => {
            $.each(data, function(indice, persona) {
                let fila = $('<tr>');
                fila.append($(`<td>${persona.id}</td>`));
                fila.append($(`<td>${persona.name}</td>`));
                fila.append($(`<td>${persona.username}</td>`));
                fila.append($(`<td>${persona.email}</td>`));
                fila.append($(`<td>${persona.address.street}</td>`));
                fila.append($(`<td>${persona.address.suite}</td>`));
                fila.append($(`<td>${persona.address.city}</td>`));
                fila.append($(`<td>${persona.address.zipcode}</td>`));
                fila.append($(`<td>${persona.address.geo.lat}</td>`));
                fila.append($(`<td>${persona.address.geo.lng}</td>`));
                fila.append($(`<td>${persona.phone}</td>`));
                fila.append($(`<td>${persona.website}</td>`));
                fila.append($(`<td>${persona.company.name}</td>`));
                fila.append($(`<td>${persona.company.catchPhrase}</td>`));
                fila.append($(`<td>${persona.company.bs}</td>`));

                $('#personas tbody').append(fila);
            });

            $('#personas').show();
        });
    });
});
