deleteUpdateCustomer.onshow=function(){
      let query2 = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query)

    if (req1.status == 200) { //transit worked.
            customerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + customerData)
    } else {
        NSB.MsgBox("Error: " + req1.status);
    }  
}
}

rdDelUp.onclick=function(){
  
}
