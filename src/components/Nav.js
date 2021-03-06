// @flow

import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom';

const navList: Array<string> = ['/tx-type', '/fee-value-ratio'];

type Props = {
    history: { push: (loc: string) => void };
    location: { pathname: string };
};

class Nav extends Component<Props> {
    onNavChange = (event, value: number) => {
        this.props.history.push(navList[value]);
    };

    render() {
        const tabIndex = navList.indexOf(this.props.location.pathname);
        return (
            <AppBar>
                <Tabs onChange={this.onNavChange} value={tabIndex === -1 ? 0 : tabIndex}>
                    <Tab label='Transaction Types' />
                    <Tab label='Fee / Value Ratio' />
                </Tabs>
            </AppBar>
        );
    }
}

export default withRouter(Nav);
