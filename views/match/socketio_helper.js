var socket = null;

function resetUIelements() {
    // Reset UI elements
    currentDart = 1;
    $('.uv-active-player-visits .first').text('')
        .removeClass('dart-score-single')
        .removeClass('dart-score-double')
        .removeClass('dart-score-triple');
    $('.uv-active-player-visits .first').removeAttr('data-score');
    $('.uv-active-player-visits .first').attr('data-multiplier', 1);
    $('.uv-active-player-visits .first').attr('data-checkout', 0);
    $('.uv-active-player-visits .second').text('')
        .removeClass('dart-score-single')
        .removeClass('dart-score-double')
        .removeClass('dart-score-triple');
    $('.uv-active-player-visits .second').removeAttr('data-score');
    $('.uv-active-player-visits .second').attr('data-multiplier', 1);
    $('.uv-active-player-visits .second').attr('data-checkout', 0);
    $('.uv-active-player-visits .third').text('')
        .removeClass('dart-score-single')
        .removeClass('dart-score-double')
        .removeClass('dart-score-triple');
    $('.uv-active-player-visits .third').removeAttr('data-score');
    $('.uv-active-player-visits .third').attr('data-multiplier', 1);
    $('.uv-active-player-visits .third').attr('data-checkout', 0);
    $('#submit-score-button').data('busted', 0);
    $('#submit-score-button').data('finished', 0);
}

function setupSocketIO(matchId) {
    var socket = io(window.location.protocol + '//' + window.location.host + '/matches/' + matchId);

    socket.on('connect', function (data) {
        socket.emit('join', 'Client Conneting');
    });

    socket.on('spectator_connected', function (data) {
        alertify.success('Spectator connected');
    });

    socket.on('spectator_disconnected', function (data) {
        alertify.warning('Spectator disconnected');
    });

    socket.on('connected', function (data) {
        console.log(data);
    });

    socket.on('error', function (data) {
        console.log(data);
        alert('Error: ' + data.message);
    });

    socket.on('match_finished', function (data) {
        // Forward all clients to results page when match is finished
        location.href = 'matches/' + matchId + '/leg';
    });

    socket.on('score_update', function (data) {
        $('#submit-score-button').prop('disabled', false);

        // Set the global match object
        match = data.match;
        scores = {};

        $('#round-number').text('R' + (Math.floor(match.visits.length / match.players.length) + 1));

        // Set updated score per player
        var currentPlayerId = match.current_player_id;
        var players = data.players;
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var td = $('#player-score-' + player.player_id);
            var tdLegs = $('#player-legs-' + player.player_id);
            var tdVisit = $('#player-visit-' + player.player_id);
            var label = td.find('.label-player-score-umpire');
            label.text(player.current_score);

            if (player.player_id === currentPlayerId) {
                td.removeClass().addClass('uv-active-player-score ' + player.modifier_class);
                tdLegs.removeClass().addClass('uv-active-player-legs ' + player.modifier_class);
                tdVisit.removeClass().addClass('uv-active-player-visits ' + player.modifier_class);
                $('#submit-score-button').data('current-player-id', player.player_id);
                label.addClass('current-player');
                $('.uv-active-player-visits .dart-score-total').html(0);
            }
            else {
                td.removeClass().addClass('uv-inactive-player-score ' + player.modifier_class);
                tdLegs.removeClass().addClass('uv-inactive-player-legs ' + player.modifier_class);
                tdVisit.removeClass().addClass('uv-inactive-player-visits ' + player.modifier_class);
                label.removeClass('current-player');
                label.removeAttr('data-current-player-id');
                // Display scores as 'inactive'
                //$('.uv-inactive-player-visits .first').addClass('dart-score-inactive');
                //$('.uv-inactive-player-visits .second').addClass('dart-score-inactive');
                //$('.uv-inactive-player-visits .third').addClass('dart-score-inactive');
            }
        }
        resetUIelements();
    });

    this.socket = socket;
    return socket;
}