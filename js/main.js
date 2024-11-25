$(document).ready(function () {
    // Process bar
    setTimeout(function () {
        init();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            overflow: 'visible'
        });
    }, 600);
});

function init() {
    // Set button and text content based on CONFIG
    document.getElementById('titleWeb').innerHTML = CONFIG.titleWeb;
    $('#title').text(CONFIG.title);
    $('#desc').text(CONFIG.desc);
    $('#yes').text(CONFIG.btnYes);
    $('#no').text(CONFIG.btnNo);

    // Place buttons in initial positions
    const xYes = ($(window).width() - $('#yes').width()) / 2 - 100;
    const y = 0.75 * $(window).height();
    $('#yes').css({ left: xYes, top: y });

    const xNo = xYes + 200;
    $('#no').css({ left: xNo, top: y });
}

// Move the "No" button to a random position
function moveButton() {
    const audio = new Audio('sound/Swish1.mp3');
    audio.play();

    const x = Math.random() * ($(window).width() - $('#no').width());
    const y = Math.random() * ($(window).height() - $('#no').height());
    $('#no').css({ left: `${x}px`, top: `${y}px` });
}

// Initialize event listeners
$('#no').on('mouseenter', function () {
    moveButton();
});

$('#yes').on('click', function () {
    const audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Thank you!',
        text: CONFIG.mess,
        confirmButtonText: CONFIG.btnAccept,
        confirmButtonColor: '#83d0c9',
        background: '#fff url("img/iput-bg.jpg")',
        onClose: () => {
            window.location = CONFIG.messLink;
        }
    });
});
