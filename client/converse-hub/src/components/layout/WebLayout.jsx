import React from 'react'
import Header from './Header'

const WebLayout = () => WrappedComponent => {

    return (props) => {


        return (
            <div>

                <Header/>
                <WrappedComponent {...props} />
                <div>Footer</div>
            </div>
        )


    }
}

export default WebLayout