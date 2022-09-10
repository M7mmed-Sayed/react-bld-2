import { Tab } from 'bootstrap'
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap'

function ControllTabs() {
    const [key, setKey] = useState('python')

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            transition={false}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="python" title="Python" ></Tab>
            <Tab eventKey="excel" title="Excel"></Tab>
            <Tab eventKey="web" title="Web"></Tab>
            <Tab eventKey="javascript" title="javascript"></Tab>
            <Tab eventKey="data-science" title="data science"></Tab>
            <Tab eventKey="aws-cert" title="aws cert"></Tab>
            <Tab eventKey="draw" title="Draw"></Tab>
        </Tabs>
    )
}

export default ControllTabs
