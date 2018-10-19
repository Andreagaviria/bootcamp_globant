import React, {Component} from 'react'
import './App.css';
import img from "src/imagenes";



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
            <img src={"src/imagenes/89-01.png"}/>
                <h1>To do list</h1>
                <input 
                    type="text"
                    placeholder="Escribe aquí"
                    value={this.state.tarea}
                    onChange={this.handleChange}
                />
                <button  type="submit" onClick={this.crearTarea}>Done</button>
                <ul>
                    {
                        this.state.tareas.map(tarea => (
                            <li key={tarea}>
                                {tarea}
                                <button 
                                    type="submit"
                                    onClick={() => this.eliminarTarea(tarea)}>Dont need this anymore</button>  
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