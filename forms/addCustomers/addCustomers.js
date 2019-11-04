customer1 = ""
compResults1 = ""
results1 = ""

seeCustomers.onshow = function(){
  drpdownName2.clear()
  var query1 = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query1)
      if (req1.status == 200) {
            customer1 = JSON.parse(req1.responseText)
            for (i = 0; i < customer1.length; i++)
            drpdownName2.addItem(customer[i])
    }
}
drpdownName2.onclick=function(){
  if (typeof(a) == "object") {
  return
  }
else { 
  drpdownName2.value = a
  let query2 = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + a + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query2)
      if (req1.status == 200) {
            compResults = JSON.parse(req1.responseText)
            for (i = 0; i < compResults.length; i++)
            results = results + compResults[i] + "\n"
            txtaCustInfo1.value = results
    }
}
}
     let queryAdd = "INSERT INTO customer WHERE name = " + '"' + nameAdd + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + queryDelete)
      let nameAdd = inptNameAdd.value
      if (req1.status == 200) {
        if (req1.responseText == 500)
            NSB.MsgBox("You have successfully deleted the customer named " + nameAdd)
        else
            NSB.MsgBox("There was a problem adding " + nameAdd + " to the database.")
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }  
  }
}
  
}

Hamburger3.onclick=function(){
   if (typeof(s) == "object") {
       return
    }
    switch(s) {
      case "See Customers":
          ChangeForm(seeCustomers)
          break
       case "Edit Customers":
          ChangeForm(deleteUpdateCustomer)
          break
       case "Delete Customers":
          ChangeForm(deleteUpdateCustomer)
          break
      case "Add Customers":
          ChangeForm(addCustomer)
          break
     }
}
}
