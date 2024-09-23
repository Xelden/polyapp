import os
import sqlite3

path = os.path.dirname(os.path.abspath(__file__))
db = os.path.join(path, 'polymers.db')
script = os.path.join(path, "script.sql")

if (not os.path.exists(db)):
    print("Bases de datos no encontrada. Creando.")
    os.system("cat " + script + " | sqlite3 " + db)
    print("Bases de datos creada.")

conn = sqlite3.connect(db, check_same_thread=False)
cursor = conn.cursor()
