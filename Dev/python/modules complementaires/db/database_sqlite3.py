import sqlite3

#créer une base de données
conn = sqlite3.connect('ma_base.db')
conn = sqlite3.connect(':memory:')


#créer une table
cursor = conn.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
     id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
     name TEXT,
     age INTERGER
)
""")
conn.commit()


#insérer des données
cursor.execute("""INSERT INTO users(name, age) VALUES(?, ?)""", ("olivier", 30))


#récupérer l'id de la ligne que l'on vient d'insérer
id = cursor.lastrowid


#récupérer des données
cursor.execute("""SELECT name, age FROM users""")
user1 = cursor.fetchone()


#modifier des entrées
cursor.execute("""UPDATE users SET age = ? WHERE id = 2""", (31,))


#fermer la connexion
db.close()