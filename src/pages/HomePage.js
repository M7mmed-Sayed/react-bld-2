import React from 'react'
import Banner from '../components/homePage/Banner'
import FieldContainer from '../components/homePage/FieldContainer'
import '../Css/HomePage/HomePage.css'
import ControllTabs from '../components/homePage/ControllTabs'

function HomePage(props) {
    const { data, isLoading, hasError } = props
    return (
        <>
            <div className="home-body">
                <Banner />
                <ControllTabs />
                <FieldContainer
                    isLoading={isLoading}
                    hasError={hasError}
                    data={data}
                ></FieldContainer>
            </div>
        </>
    )
}

export default HomePage
