import React,{Component} from 'react';
import Layout from "./../../components/Layout.js";
import { Form, Button, Input,Message } from "semantic-ui-react";
import factory from "./../../ethereum/factory.js";
import web3 from "./../../ethereum/web3.js";

class CampaignNew extends Component{
    state={
        minimumContribution:"",
        errorMessage:"",
        loading:false
    };

    onSubmit = async(event) => {
        console.log("check");
        event.preventDefault();
        this.setState({loading:true});
        try{
        const accounts = await web3.eth.getAccounts();
        console.log("accounts",accounts);
        await factory.methods.createCampaign(this.state.minimumContribution)
        .send({
            from:accounts[0],
        })
        }catch(err){
            this.setState({errorMessage:err.message}); 
        }
        this.setState({loading:false});
    }
    render(){
        return (
            <Layout>
            <h1>create a campaign</h1>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>
                        minimum contribution
                    </label>
                    <Input 
                        label="wei" 
                        labelPosition="right" 
                        value={this.state.miniumunContribution} 
                        onChange={event => {
                            this.setState({minimumContribution:event.target.value})
                    }}></Input>
                    <Message error header="oops" content={this.state.errorMessage}>
                    </Message>
                    <Button primary loading={this.state.loading}>
                         create
                    </Button>
                </Form.Field>
            </Form>
            </Layout>
        )
    }
}

export default CampaignNew;