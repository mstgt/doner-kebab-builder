import React, { Component} from 'react';

import Auxilary from '../../hoc/Auxilary';
import Doner from '../../components/Doner/Doner';

class DonerBuilder extends Component {
    render () {
        return (
            <Auxilary>
                <Doner />
                <div>Build Controls</div>
            </Auxilary>
        );
    }
};

export default DonerBuilder;