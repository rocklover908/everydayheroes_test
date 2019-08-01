<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
$dbdata = array();
 try {
            // Try to connect to the database
            $mysqli = new mysqli("localhost", "root", "", "excercie_term");
            //set Charset to utf8
            $mysqli->set_charset("utf8");
     //prepare sql statement 
            $statement = $mysqli->prepare("SELECT * FROM temoignages ORDER BY DATE(date) DESC");

// Execute the statement.
            $statement->execute(); 
// Binds the  executed statement as a result.
            $result = $statement->get_result(); 
     //loop through the rows as associated arrays and add it to the array dbdata
       while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }
 
       echo json_encode($dbdata)  ;    
 
  
        } catch (mysqli_sql_exception $e) { // Failed to connect? Lets see the exception details..
           
     echo  "{'success':false, 'data':[] ,'numberTemoignages':0},'messageError':'".$e->getMessage()."','errorCode':".$e->getCode()."}";   
            exit(); // exit and close connection.
        }

        $mysqli->close(); // finally, close the connection
?>
   