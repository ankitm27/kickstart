import React, { Component } from 'react';

import { Form, Button, Message,Input } from "semantic-ui-react";
import Campaign from "./../../../ethereum/campaign.js";

import web3 from "./../../../ethereum/web3.js";

import { Link, Router } from "./../../../routes.js";
import Layout from "./../../../components/Layout.js";

class RequestNew extends Component{
    state = {
        value:"",
        description:"",
        recipient:"",
        loading:false,
        errorMessage:""
    }
    static async getInitialProps(props){
        const { address } = props.query;
        return { address };
    }
    onSubmit = async(event) => {
        console.log("check121212121212");
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        console.log("campaign",campaign);
        const { description,value,recipient } = this.state;
        console.log("description",description);
        console.log("value",value);
        console.log("recipient",recipient);
        this.setState({loading:true,errorMessage:""});
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether'),recipient).send({
                from:accounts[0]
            });
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);              
        }catch(err){
            this.setState({errorMessage:err.message});
        }
        this.setState({loading:false});

    }
    render(){
        return (
            <Layout>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>
                        description
                    </label>
                    <Input value={this.state.description} onChange={event => {
                        this.setState({description : event.target.value})
                    }}> 
                    </Input>
                </Form.Field>
                <Form.Field>
                    <label>
                        value
                    </label>
                    <Input value={this.state.value} onChange={event => {
                        this.setState({value:event.target.value})
                    }}>
                        
                    </Input>
                </Form.Field>
                <Form.Field>
                    <label>
                        recipient
                    </label>
                    <Input value={this.state.recipient} onChange={event => {
                        this.setState({recipient:event.target.value})
                    }}>
                    </Input>
                </Form.Field>
                <Message error header="oops" content={this.state.errorMessage}></Message>
                <Button primary loading={this.state.loading}>
                    create
                </Button>
            </Form>
            </Layout>
        )
    }
}

export default RequestNew;