// declarrar un array que representara los asientos de nuestro avion con false indicando que estos estan vacios
// ocupado = true

var airlineSeats = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
];

// contador que nos ayudará a ratrear el numero de asientos ocupados
var busySeats = 0;

var paintSeats = function(array) {
    var containerSeats = document.getElementById('seats');

    for (var i = 0; i < array.length; i++) {
        var seat = document.createElement('div');
        seat.className = 'seats';

        // del primer elemento al cuarto, en nuestro arreglo va a ser primera clase que seria del indice 0 al indice 3
        if (i < 4) {
            seat.style.background = 'purple';
        } else {
            seat.style.background = 'yellow';
        }
        containerSeats.appendChild(seat);
    }
};

var reserve = function() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', chooseZone);
}
var chooseZone = function() {
    var choice = prompt("En que zona prefieres reservar \n 1. Primera Clase \n 2. Economica \n \n Por favor ingresa el numero de tu preferencia");

    if (choice == 1) {
        checkFirstClassZone();
    } else if (choice == 2) {
        checkEconomicZone();
    } else {
        alert('Por favor ingresa un numero valido')
    }
};

var checkFirstClassZone = function() {
    var zone = 'Primera Clase'
    for (var index = 0; index < 4; index++) {
        if (airlineSeats[index] == false) {
            airlineSeats[index] = true;
            reserveSeat(index);
            paintTicket(index, zone);
            busySeats++;
            // al reservar un asiento no necesitamos seguir recorriendo nuestro asiento
            break;
        } else if (index == 3 && airlineSeats[index] == true) {
            reasingEconomicZone();
        }
    }
}

var checkEconomicZone = function() {
    var zone = 'Economica';
    for (var index = 4; index < 10; index++) {
        if (airlineSeats[index] == false) {
            airlineSeats[index] = true;
            reserveSeat(index);
            paintTicket(index, zone);
            busySeats++;
            break;
        } else if (index == 9 && airlineSeats[index] == true) {
            reasingFirstClasszone();
        }
    }
}

var reserveSeat = function(indexToPaint) {
    var seat = document.getElementsByClassName('seats');
    seat[indexToPaint].textContent = 'Ocupado';
}

var reasingEconomicZone = function(zone) {
    if (busySeats == 10) {
        noSeats();
        nextFlight();
    } else {
        var reasing = confirm('Ya no quedan asientos disponibles :( ' + zone + '\n ¿Quieres reservar en zona Economica');
        if (reasing == true) {
            checkEconomicZone();
        } else {
            nextFlight();
        }
    }
}

var reasingFirstClasszone = function(zone) {
    if (busySeats == 10) {
        noSeats();
        nextFlight();
    } else {


        var reasing = confirm('Ya no quedan asientos' + zone + '\n ¿Quieres reservar en primera clase');
        if (reasing == true) {
            checkFirstClassZone();
        } else {
            nextFlight();
        }
    }
}

var paintTicket = function(index, zone) {
    var containerTickets = document.getElementById('tickets');
    var ticket = document.createElement('div');
    ticket.className = 'seats';
    var title = document.createElement('p');
    var reservedSeating = document.createElement('p');
    var zoneClass = document.createElement('p');
    title.textContent = 'Pase de Abordar';
    reservedSeating.textContent = 'No. de asiento: ' + (index + 1);
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reservedSeating);
    ticket.appendChild(zoneClass);
    containerTickets.appendChild(ticket);
}

var nextFlight = function() {
    alert('Nuestro proximo vuelo sale en 3 hrs');
}

var noSeats = function(){
    alert("Lo sentimos, ya no quedan asientos disponibles");
}
paintSeats(airlineSeats);
reserve();
