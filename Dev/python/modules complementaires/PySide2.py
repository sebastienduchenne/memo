'''
= binding officiel de Python pour l'API graphique Qt
-sous-modules de PySide2: 
    -PySide2.QtCore
    -PySide2.QtWidgets : ensemble d'éléments graphiques
    -PySide2.QtGui

-PySide2.QtWidgets
    -QApplication
    -QtWidget = classe de base
        -QMainWindow = classe pour fenêtre principale
        -QLabel

-signal = message envoyé par un widget lorsqu'un évènement se produit
-slot = fonction qui est appelée lorsqu'un évènement s'est produit

self.__<element>.<signal>.connect()

'''


# exemple

import sys
from PySide2.QtGui import *
from PySide2.QtWidgets import *

class MyWindow( QMainWindow ):
    
    def __init__ ( self ) :
        QMainWindow.__init__( self )
        self.setWindowTitle( 'title' )
        self.resize(320, 150)

        self.__button = QPushButton( "button", self )
        self.__button.setGeometry(10, 10, 100, 50)
        self.__button.clicked.connect(self.on_click_button) # connecter un signal à un slot

        self.__label = QLabel( self )
        self.__label.setGeometry(150, 20, 50, 35)
        self.__label.setText( "label" )

    def on_click_button(self, result):
        self.__label.setText( "clicked" )


if __name__ == "__main__" :
    app = QApplication( sys.argv )

    myWindow = MyWindow()
    myWindow.show()
    
    sys.exit( app.exec_() )


# créer un signal

class Record(QThread):

	data = Signal(int, String)

	def __init__(self):
		QThread.__init__(self, parent)

    def run(self):
        self.data.emit(3, "toto"))


class MyWindow( QMainWindow ):
    
    def __init__ ( self ) :
        QMainWindow.__init__( self )

		self._thread = Record()
		self._thread.data.connect(self._update_record)

    @Slot(int, String)
    def _update_record(self, nb, s):
        print(nb + " - " +s)


if __name__ == "__main__":
    app = QApplication( sys.argv )

    myWindow = MyWindow()
    myWindow.show()
    
    sys.exit( app.exec_() )