
import withMain from "./withMain"

const Main = ({context,dispatch}) => {
    return <h1> {context.test} </h1>
}

export default withMain(Main)
