import React,{Component} from 'react';
import factory from "../ethereum/factory.js";
import { Card,Button } from "semantic-ui-react";

import Layout from "../components/Layout.js";


class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call()
        console.log("campaigns",campaigns); 
        return {campaigns:campaigns}
    }
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header:address,
                description:<a>view campaigns</a>,
                fluid:true
            }
        })
        return <Card.Group items={items} />;
    }
    render(){
        return( 
            <Layout>
            <div>
               {/* {this.props.campaigns[0]} */}
               <h3>open campaign</h3>
               <Button floated="right" content="create campaign" icon="add circle" primary>
               </Button> 
               {this.renderCampaigns()}
               
               
               
            </div>
            </Layout>
        )    
    }
}

export default CampaignIndex;