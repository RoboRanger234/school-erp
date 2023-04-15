<?php
    if($_POST){
        print_r($_POST);
        $email = $_POST["email"];
        $first_name = $_POST["first_name"];
        $last_name=$_POST["last_name"];
        $conn = mysqli_connect("localhost","root","","school_info_database");
        $sql=mysqli_query($conn,"INSERT into school_student_info set email=$email AND first_name=$first_name AND last_name = $last_name");
        if($sql){
            echo"and is able to enter data into thus submitted!";
        }
        else{
            echo"its not entering values into table";
        }
    }else{
        echo "no post data";
    }
?>
