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

})