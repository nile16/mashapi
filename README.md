# mashapi

Ett mashAPI som levererar förväntade temperaturer för nästa 24 timmar för Ronneby från SMHI samt aktuell temperatur för Ronneby från temperatur.nu. 


tempAPI.js:  
En server som scrapar aktuell temperatur från temperatur.nu och gör den tillgänglig via ett API.  
GET http://nile16.nu:1251/

temp.js:  
En modul som läser in temperaturen från tempAPIs API.

forecast.js:  
En modul som läser in prognosen från SMHIs API.

mashAPI.js:  
Hämtar prognos och temperatur varje halvtimma med temp.js och forecast.js. Sparar datat i en CouchDB databas.  
En server som vid anrop skickar prognos och temperatur från databasen.  
GET http://nile16.nu:1255/

index.html:  
En webbsida som hämtar prognos och temperatur från mashAPI.js och presenterar en graf och aktuell temperatur. Kan ses på http://nile16.nu/mash/
