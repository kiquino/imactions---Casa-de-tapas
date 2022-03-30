$(function () {
    $('.calendar-container').calendar({
        date: new Date(),


        onClickDate: function (date) {

            let dia = new Date(date).getDate();
            let mes = new Date(date).getMonth() + 1;
            let año = new Date(date).getFullYear();
            $('#date').val(dia + "/" + mes + "/" + año);

        },

        highlightSelectedWeekday: true,


    });
    $('#btnReserve').click(function (event) {
        event.preventDefault();
        Swal.fire({
            title: 'Bon Appetite',
            text: 'Su reserva se ha realizado con éxito',
            icon: 'success',
            confirmButtonText: 'Volver'
        })
    })
})