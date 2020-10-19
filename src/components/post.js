import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a: 0,
            title: "",
            description: "",
            steps: []
        }
    }
    steps = () => {
        let stepForm = (
            <div>
                <Form.Group>
                    <Form.Label><b>Steps</b></Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="steps" onChange={this.handleList} />
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Image</b></Form.Label>
                    <Form.Control type="file" placeholder="img" />
                </Form.Group>
            </div>
        );
        let steps = [];
        for (let i = 0; i !== this.state.a; i++){
            steps.push(stepForm);
        }
        return (
            <div>
                {steps}
            </div>
        );
    }

    handleList = event => {
        let hmm = event.target.value;
        this.setState({steps: this.state.steps.push(hmm)});
        console.log(this.state.steps)
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div style={{margin: 20, alignItems: "center", justifyContent: "center"}} >
                <Form  >
                    <Form.Group>
                        <Form.Label><b>Title</b></Form.Label>
                        <Form.Control name="title" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Description</b></Form.Label>
                        <Form.Control name="description" as="textarea" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Steps</b></Form.Label>
                        <Form.Control name="steps" as="textarea" rows="3" placeholder="steps" onChange={this.handleList1} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Image</b></Form.Label>
                        <Form.Control type="file" placeholder="img" />
                    </Form.Group>
                    {this.steps()}
                    <div style={{margin: 10, marginLeft: 0}}>
                        <Button variant="primary" onClick={() => {this.setState({a:this.state.a+1})}} >Add</Button>
                    </div>
                    <div style={{margin: 10, marginLeft: 0}}>
                        <Button variant="primary" type="submit" >Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}