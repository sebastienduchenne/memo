/*
= référence permettant d'accéder à un nœud du DOM ou à un élément React créé dans la méthode de rendu
-ne pas en abuser

dans js : this.myRef = React.createRef();   
dans noeud : <div ref={this.myRef} />

*/

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef(); // crée une référence pour stocker l’élément DOM textInput
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Donne explicitement le focus au champ texte en utilisant l’API DOM native.
        // Remarque : nous utilisons `current` pour cibler le nœud DOM
        this.textInput.current.focus();  
    }

    render() {
        // on associe la ref `textInput` créée dans le constructeur avec le `<input>`
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />        
                <input
                    type="button"
                    value="Donner le focus au champ texte"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}