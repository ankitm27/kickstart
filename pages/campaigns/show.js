import React, { Component } from 'react';

import Layout from "./../../components/Layout";
import Campaign from "./../../ethereum/campaign.js"; 
import { Card ,Grid} from "semantic-ui-react";
import { throws } from 'assert';
import web3 from "./../../ethereum/web3.js";
import ContributeForm from "./../../components/ContributeForm.js";


class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log("summary",summary);
        return {
            mimimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4],
            address:props.query.address
        };
    }

    renderCard(){
        const {
            balance,
            manager,
            mimimumContribution,
            requestsCount,
            approversCount
        } = this.props;
        const items = [
            {
                header:manager,
                meta:"address of manager",
                description:"check1111",
                style:{overflowWrap:'break-word'}
            },{
                header:mimimumContribution,
                meta:"contribution in (wei)",
                description:"minimun contribution"
            },{
                header:requestsCount,
                meta:"requests",
                description:"request of project"
            },{
                header:approversCount,
                meta:"approvers",
                description:"approvers"
            },{
                header:web3.utils.fromWei(balance,'ether'),
                meta:'balance(ether)',
                description:"balance"
            }

        ]
        return <Card.Group items={items}></Card.Group>

    }
    render(){
        return (
            <Layout>
                {/* check1212 */}
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCard()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                    </Grid.Column>
                </Grid>
                
            </Layout>
        )
    }
}

export default CampaignShow;