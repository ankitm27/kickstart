import React,{Component} from 'react';
import factory from "../ethereum/factory.js";
import { Card,Button } from "semantic-ui-react";

import Layout from "../components/Layout.js";
import { Link } from "./../routes.js";


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
                description:(
                  <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                  </Link>
                ),
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
               <Link route="/campaigns/new">
               <a>
               <Button floated="right" content="create campaign" icon="add circle" primary>
               </Button> 
               </a>
               </Link>
               {this.renderCampaigns()}
               
               
               
            </div>
            </Layout>
        )    
    }
}

export default CampaignIndex;