<?php
    $host = "localhost";
    $root = "root";
    $password = "";
    $dbname = "supplier_registration";

    $conn = new mysqli($host, $root, $password, $dbname);

    if($conn->connect_error){
        echo "connection to database failed";
    }else{
        echo "connected to database";
    }


    if($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'read'){
        $sql = "SELECT * FROM country";
        $result = $conn->query($sql);

        if($result->num_rows > 0){
            while ($row = $result->fetch_assoc()){
                echo "<option =" . $row['id'] . ">" . $row['nicename'] . "</option>";
            }
        }else{
            echo "no country found";
        }
    }


    if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'create'){

        $uname = $_POST['uname'];
        $tnber = $_POST['tnber'];
        $nber = $_POST['nber'];
        $email = $_POST['email'];
        $padd = $_POST['padd'];
        $country_id = $_POST['country_id'];


        $sql2 = "INSERT INTO suppliers(supplier_name, tin_number, phone, email, pyhsical_address, country_id) values ('$uname', '$tnber', '$nber',  '$email', '$padd', '$country_id')";
        
        if($conn->query($sql2) === TRUE){
            echo "supplier added successfully";
        }
        else{
            echo "an error occured";
        }
    }
?>