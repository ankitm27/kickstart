import React, { Component } from 'react';
import { Form, Input,Message,Button } from "semantic-ui-react";


class contributeForm extends Component{
    render(){
        return (
            <Form>
                <Form.Field>
                    <label>
                        Amount
                    </label>
                    <Input label="ether" labelPosition="right" />
                </Form.Field>
                <Button primary>
                     contribute
                </Button>
            </Form>
        )
    }
}

export default contributeForm;