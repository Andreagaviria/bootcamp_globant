import React, {Component} from 'react'
import './App.css';




class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            tareas: [],
            tarea: ''
        }
        this.crearTarea = this.crearTarea.bind(this)
        this.eliminarTarea = this.eliminarTarea.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    crearTarea(){
        const tareas = this.state.tareas.concat(this.state.tarea)
        
        this.setState({
            tareas: tareas
        })

    }

    eliminarTarea(tarea) {
        const tareas = this.state.tareas.filter(t => t !== tarea)
        
        this.setState({
            tareas: tareas
        })
    }

    handleChange(e) {
        this.setState({
            tarea: e.target.value
        })
    }
    render() {
        return(
          <body>
            <div>
            <img className ="flore" src={require('./imagenes/flor-01.png')}/>
            <img className ="flora" src={require('./imagenes/flor-02.png')}/>
           
                <h1>To do list</h1>
                <p>"Even the smallest steps moves you forward."<br/><span>Oprah Winfrey</span></p>
                <input 
                    type="text"
                    placeholder="Escribe aquí"
                    value={this.state.tarea}
                    onChange={this.handleChange}
                />
                <button  type="submit" onClick={this.crearTarea}>Create</button>
                <ul>
                    {
                        this.state.tareas.map(tarea => (
                            <li key={tarea}>
                                {tarea}
                                <button 
                                    type="submit"
                                    onClick={() => this.eliminarTarea(tarea)}>Done</button>  
                            </li>
                        ))
                    }
                </ul>
            </div>
          </body>
        )
    }
}



export default App