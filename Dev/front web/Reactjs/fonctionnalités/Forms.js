/*
-on utilise l'évènement onChange pour déclencher une méthode
-les formulaires ont un état interne
-composant controllé : les données gérées par le composant React
-composant non controllé : les données sont gérées par le DOM
*/


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <input 
                    type = "text" 
                    value = {this.state.data} 
                    onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

//--------------------------------------------------------------

class App2 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <Content 
                    myDataProp = {this.state.data} 
                    updateStateProp = {this.updateState}>
                </Content>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <input 
                    type = "text" 
                    value = {this.props.myDataProp} 
                    onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}


//------------------------------------------------------------------

class FormulaireHTML extends React.Component {
    render() {
        return (
            <form action="http://localhost:5000/subscribe" method="post">
                <label htmlFor="login">Login :</label>
                <input type="text" id="login" name="login" autoComplete="off" required />
                <button type="submit">S'inscrire</button>
            </form>
        )
    }
}

class ComposantControlle extends React.Component {
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {  // les valeurs sont dans event
        event.preventDefault();
        const data = new FormData(event.target);
        let login = data.get('login')
        data.set('login', login);

        fetch('http://localhost:5000/connect', { method: 'POST', body: data, })
        .then(function(response) {
            console.log(response)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="login">
                    Login :
                    <input 
                        type="text"
                        name="login"
                        value={this.state.value}
                        onChange={this.handleChange}
                        required/>
                </label>
                <button type="submit">Se connecter</button>
            </form>
        )
    }
}
