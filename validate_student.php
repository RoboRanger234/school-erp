<?php
  $student_id = $_POST["school_assigned_student_id"];
  $connection_failed = false;
  $conn = mysqli_connect("localhost","root","","school_info_database") or $connection_failed = true;
  if($conn == $connection_failed){
      echo"Connection failed";
      print(mysqli_error($conn));
  }
  $result_failed = false;
  $result= mysqli_query($conn,"Select school_assigned_student_id,first_name,last_name,telephone_number,email,class,dob FROM school_info_database.student_class_info where school_assigned_student_id = '$student_id'") or $result_failed=true;
  if($result_failed == true){
      echo("Not working");
      print(mysqli_error($conn));
      if(mysqli_num_rows($result)>0){
          while($row = mysqli_fetch_assoc($result)) {
              print_r($row);
          }
          echo("You are already registered you can update the form as well through here: <a href='update.html'>Update yourself</a>");
      }
  }
  else{
      echo("You are not registered you can get yourself registered from here: <a href='sign_up.html'>New Admission</a>");
  }
?>