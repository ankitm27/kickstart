import React, { Component } from 'react';
import { Form, Input,Message,Button } from "semantic-ui-react";

import Campaign from "./../ethereum/campaign.js";
import web3 from "./../ethereum/web3.js";

import { Router } from "./../routes.js";

class contributeForm extends Component{
    state = {
        value:"",
        errorMessage:"",
        loading:""
    }
    onSubmit = async(event) => {
        console.log("check");
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        console.log("campaign",campaign);
        this.setState({loading:true})
        try{
            const accounts = await web3.eth.getAccounts();
            console.log("accounts",accounts);
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.value,'ether')
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`)    
        }catch(err){
            this.setState({errorMessage:err.message});    
        }
        this.setState({loading:false,value:""});
    }
    render(){
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>
                        Amount
                    </label>
                    <Input 
                    label="ether" 
                    labelPosition="right" 
                    value={this.state.value} 
                    onChange={event => this.setState({value:event.target.value})}>
                    </Input>
                </Form.Field>
                <Message error header="oops" content={this.state.errorMessage}></Message>
                <Button primary loading={this.state.loading }>
                     contribute
                </Button>
            </Form>
        )
    }
}

export default contributeForm;