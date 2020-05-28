const React = require('react')
const Layout = (props => {
    return (
        <>
            <head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"/>
          
            </head>

            <body className='container'>
             
                    <div>{props.children}</div>
                 
            </body>
        </>
    )
})
module.exports = Layout