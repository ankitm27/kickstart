import React, { Component } from 'react';
import Layout from "./../../../components/Layout.js";

import { Button } from "semantic-ui-react";
import { Link } from "./../../../routes.js";


class RequestIndex extends Component{
    static async getInitialProps(props){
        const { address } = props.query;
        return { address };
    }
    render(){
        return(
            <Layout>
                <h3>
                    requests
                </h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>
                            add request
                        </Button>
                    </a>
                </Link>  
            </Layout>
        )
    }
}

export default RequestIndex;