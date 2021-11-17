import React, { Component } from 'react'
import * as Yup from 'yup';
import {Formik, Field, Form} from 'formik';
import Table from 'react-bootstrap/Table'

const formSchema = Yup.object().shape({
    "name": Yup.string().typeError('You must specify a pokemon').required('Required')
                

    
})

const initialValues = {
    name: ''
    
}

export default class Home extends Component {

    constructor() {
        super();
        this.state={
            pokemon:[],
            badName:false
        };
    }

    handleSubmit=({name})=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    pokemon: [data],
                    badName: false
                }, ()=>console.log(this.state.pokemon))
            })
            .catch(error=>{console.error(error); this.setState({badName:true})})

    }    

    render() {
        return (
            <div>
                <h1>Search Pokemon</h1>
                {this.state.badName ? <small style={{color:"red"}}>Invalid Pokemon</small>:""}
                <Formik initialValues={initialValues}
                        validationSchema={formSchema}
                        onSubmit={
                            (values, {resetForm})=>{
                                this.handleSubmit(values);
                                resetForm(initialValues);
                            }
                        }
                        >
                        {
                            ({errors, touched})=>(
                                <Form>
                                    <label htmlFor="name" className="form-label">Pokedex</label>
                                    <Field name="name" className="form-control" />
                                    {errors.name && touched.name ? (<div style={{color:'red'}}>{errors.name}</div>):null}

                                   
                                    
                                    <button type="submit" className="btn btn-primary">Search</button>

                                </Form>
                            )
                        }

                </Formik>

                
                
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Ability</th>
                            <th>Base experience</th>
                            <th>base hp</th>
                            <th>base attack</th>
                            <th>base defense</th>
                            <th>front shiny</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pokemon.map(
                                data => (
                                    <tr key={data.forms[0].name}>
                                        <td>{data.forms[0].name}</td>
                                        <td>{data.abilities[0].ability.name}</td>
                                        <td>{data.base_experience}</td>
                                        <td>{data.stats[0].base_stat}</td>
                                        <td>{data.stats[1].base_stat}</td>
                                        <td>{data.stats[2].base_stat}</td>
                                        <td ><img src={data.sprites.front_shiny} alt="pokemon"/></td>
                                       
                                    </tr>
                                )
                            )
                            
                            }
                        </tbody>
                    </Table>
               

            </div>
        )
    }
}