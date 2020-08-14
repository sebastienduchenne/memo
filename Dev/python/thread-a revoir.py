#----------------------- SERVER ---------------------------------

#threading pour gérer plusieurs demandes en même temps 

import socket
import threading

class ClientThread(threading.Thread):

    def __init__(self, ip, port, clientsocket):

        threading.Thread.__init__(self)
        self.ip = ip
        self.port = port
        self.clientsocket = clientsocket
        print("[+] Nouveau thread pour %s %s" % (self.ip, self.port, ))

    def run(self): 
   
        print("Connexion de %s %s" % (self.ip, self.port, ))

        r = self.clientsocket.recv(2048)
        print("Ouverture du fichier: ", r, "...")
        fp = open(r, 'rb')
        self.clientsocket.send(fp.read())

        print("Client déconnecté...")

tcpsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcpsock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
tcpsock.bind(("",1111))

while True:
    tcpsock.listen(10)
    print( "En écoute...")
    (clientsocket, (ip, port)) = tcpsock.accept()
    newthread = ClientThread(ip, port, clientsocket)
    newthread.start()


#----------------------- CLIENT ---------------------------------

import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("", 1111))

print("Le nom du fichier que vous voulez récupérer:")
file_name = input(">> ") # utilisez raw_input() pour les anciennes versions python
s.send(file_name.encode())
file_name = 'data/%s' % (file_name,)
r = s.recv(9999999)
with open(file_name,'wb') as _file:
    _file.write(r)
print("Le fichier a été correctement copié dans : %s." % file_name)


