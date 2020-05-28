const React = require('react');
const Layout= require('./Layout.jsx');
class Index extends React.Component {
    render() {
        const { ToDo } = this.props;
        return (
            <Layout>
                <h1>To Do List</h1>
                <h3>{this.props.ToDo.length > 0 ? '' : 'There are no To Dos yet!'}</h3>
                <ul>
                    {ToDo.map((ToDo, i) => {
                            console.log(ToDo._id)
                            return (
                                <div>
                                <li>
                                   <h2>{ToDo.data}</h2>
                                    {/* DELETE */}
                                    <form action={`/index/${ToDo._id}?_method=DELETE`} method="POST">
                                         <input type="submit" value="DELETE"/>
                                    </form><br/>
                                   
                                </li> 
                              </div>
                            )
                        })
                    }
                </ul>

                <form action="/index" method="POST">
                    <input type="text" name="data" />
                    <button type="submit" value = "post">Add To Do</button>
                </form> 
            </Layout>
        )
    }
}

module.exports = Index;