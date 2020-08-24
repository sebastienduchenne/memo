import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="user",
  password="password",
  database="db"
)

mycursor = mydb.cursor()

#show table
mycursor.execute("SELECT * FROM table")
myresult = mycursor.fetchall()
for x in myresult:
  print("lignes:",x)


#update
sql = "UPDATE utilisateur SET name = 'valeur' WHERE name2 = 'valeur2'"
mycursor.execute(sql)
mydb.commit()
print(mycursor.rowcount, "record(s) affected")