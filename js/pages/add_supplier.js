$(document).ready(function () {
    function loaddata() {
        $.ajax({
            url: 'http://localhost/work/php/add_supplier.php',
            type: 'GET',
            data: { action: 'read' },
            success: function (response) {
                $('#country_id').html(response);
            },
            error: function () {
                console.log('An error occurred while loading countries');
            }
        });
    }

    $('#country_id').change(function(){
        const selectedText = $("#country_id option:selected").text().toLowerCase();

        if(selectedText.includes("rwanda")){
            $('#tin_div').show();
        } else {
            $('#tin_div').hide();
            $('#tnber').val(''); 
        }
    })

    $('#subButton').click(function () {
        const uname = $('#uname').val();
        const tnber = $('#tnber').val();
        const nber = $('#nber').val();
        const email = $('#email').val();
        const padd = $('#padd').val();
        const country_id = $('#country_id').val();

        $.ajax({
            url: 'http://localhost/work/php/add_supplier.php',
            type: 'POST',
            data: {
                action: 'create',
                uname: uname,
                tnber: tnber,
                nber: nber,
                email: email,
                padd: padd,
                country_id: country_id
            },
            success: function (response) {
                console.log(response);
                alert(response); // show the response
                $('#uname').val('');
                $('#tnber').val('');
                $('#nber').val('');
                $('#email').val('');
                $('#padd').val('');
                $('#country_id').val('');
                loaddata();
            },
            error: function () {
                console.log('Error sending data to PHP');
            }
        });
    });

    loaddata();
});
