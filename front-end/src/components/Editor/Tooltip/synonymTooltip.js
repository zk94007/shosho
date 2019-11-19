import React from 'react';
import Tooltip from './index';
import './synonym.scss';

const SynonymTooltip = ({ show }) => (
    <Tooltip show={show} variant="synonym">
        &nbsp;
    </Tooltip>
);

export default SynonymTooltip;