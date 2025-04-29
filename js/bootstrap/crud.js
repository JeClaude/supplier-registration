$(document).ready(function(){
    function loaddata(){
        $.ajax({
            url : 'http://localhost/TEST/crud.php',
            type : 'GET',
            data : {action : 'read'},
            success : function(response) {
                $('.people_list').html(response);
            },
            error : function(){
                alert('an error occured');
            }
        });
    }

    $('#addButton').click(function(){
        const name  = $('#name').val();

        $.ajax({
            url : 'http://localhost/TEST/crud.php',
            type : 'POST',
            data : {action : 'create', name},
            success : function(response) {
                $('#name').val('');
                loaddata();
            },
            error : function(){
                alert('an error occured');
            }
        });
    });

    loaddata();

    
});

// document.querySelector(".people_list").innerHTML = "<p style='color:lime;'>It works!</p>";
