<?php
    if(!isset($_SESSION[''])){
        echo " <script type='text/javascript'>";
        echo "alert('User not logged in!')";
        echo " </script>";
    }
?>
