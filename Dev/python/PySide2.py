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
'''


# exemple

import sys
from PySide2.QtGui import *
from PySide2.QtWidgets import *

class MyWindow( QMainWindow ):
    
    def __init__ ( self ) :
        QMainWindow.__init__( self )
        self.setWindowTitle( 'title' )

        self.__button = QPushButton( "button", self )
        self.__button.setGeometry(10, 10, 100, 50)
        

if __name__ == "__main__" :
    app = QApplication( sys.argv )

    myWindow = MyWindow()
    myWindow.show()
    
    sys.exit( app.exec_() )