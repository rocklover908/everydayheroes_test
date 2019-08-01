<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

 
 
            // Try to connect to the database

  $db = new mysqli("localhost", "root", "", "excercie_term");
 
            //set Charset to utf8
$db->set_charset("utf8");
// get the total nimber of rows of temoignages
$sql = "SELECT COUNT(*) FROM temoignages ";
$result =  $db->query($sql);
$r = $result->fetch_assoc();
$numrows = $r["COUNT(*)"];
 
// number of rows to show per page
$rowsperpage = 10;

// find out total pages
$totalpages = ceil($numrows / $rowsperpage);
 
// get the current page or set a default
if (isset($_GET['page']) && is_numeric($_GET['page'])) {
$currentpage = (int) $_GET['page'];
} else {
$currentpage = 1;  // default page number
}
 
// if current page is greater than total pages
if ($currentpage > $totalpages) {
// set current page to last page
$currentpage = $totalpages;
}
// if current page is less than first page
if ($currentpage < 1) {
// set current page to first page
$currentpage = 1;
}
 
// the offset of the list, based on current page
$offset = ($currentpage - 1) * $rowsperpage;
 
// get the items for the current page from database
$sql = "SELECT * FROM temoignages  ORDER BY DATE(date) DESC LIMIT $offset, $rowsperpage";
$result = $db->query($sql) ;
 $output=array();
while ($row = $result->fetch_assoc()){
$output[]=$row;
}
$finalresult['items']=$output;
$finalresult['total']=$numrows;
//echo  "{'items':".json_encode($output).",
//'total':".$numrows."}" ;
 
 echo json_encode($finalresult);
?>