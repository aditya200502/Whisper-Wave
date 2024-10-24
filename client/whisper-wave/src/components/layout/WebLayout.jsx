import React from 'react'

const WebLayout = () => WrappedComponent => {

    return (props) => {


        return (
            <div>

                <div>Header</div>
                <WrappedComponent {...props} />
                <div>Footer</div>
            </div>
        )


    }
}

export default WebLayout