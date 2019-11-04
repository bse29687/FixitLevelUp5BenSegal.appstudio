customer = ""
compResults = ""
results = ""

seeCustomers.onshow = function(){
  drpdownName.clear()
  var query1 = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query1)
      if (req1.status == 200) {
            custTable = JSON.parse(req1.responseText)
            for (i = 0; i < custTable.length; i++)
            drpdownName.addItem(customer[i])
    }
}
drpdownName.onclick=function(){
  if (typeof(a) == "object") {
  return
  }
else { 
  drpdownName.value = a
  let query2 = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + a + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query2)
      if (req1.status == 200) {
            compResults = JSON.parse(req1.responseText)
            for (i = 0; i < compResults.length; i++)
            results = results + compResults[i] + "\n"
            txtaCustInfo.value = results
    }
}
}
}


Hamburger1.onclick=function(){
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
