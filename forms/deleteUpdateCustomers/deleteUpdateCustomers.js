deleteUpdateCustomers.onshow = function(){
  drpdownName.clear()
  var query3 = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query3)
      if (req1.status == 200) {
            custTable = JSON.parse(req1.responseText)
            for (i = 0; i < custTable.length; i++)
            drpdownName.addItem(customer[i])
    }
}


btnUpDel.onclick=function(){
  if (rdoDelete.value == 0)
    let updatedName = inptDelUp.value
    let query4 = "SELECT name, stree, city, state, zipcode FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + query4)
  } else
    if (req1.status == 200) {
        if (req1.responseText == 500) {
            let resultUpdate = JSON.parse(req1.responseText)
            lblResult.value = resultUpdate
            NSB.MsgBox("You have successfully changed the company name!")
        } else
            NSB.MsgBox("There was a problem changing the company name.")
    } else {
        NSB.MsgBox("Error: " + req1.status)
    }  
}
if (rdoDelete.value == 1) {
   let nameDelete = inptName.value
    let found = false
    for (i = 0; i <= customerTable.length - 1; i++) {
        if (nameDelete == customerTable[i][1])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + nameDelete + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=bse29687&query=" + queryDelete)

      if (req1.status == 200) {
        if (req1.responseText == 500)
            NSB.MsgBox("You have successfully deleted the customer named " + nameDelete)
        else
            NSB.MsgBox("There was a problem deleting " + nameDelete + " from the database.")
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }  
  }
}
  
}
  }
  
  else {
  NSB.MsgBox("ERROR: Type 'Update' or 'Delete'. Type exactly as shown.")
  }  
}
}  
}
}


Hamburger2.onclick=function(){
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
