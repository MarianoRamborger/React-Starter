
import withMain from "./withMain"
import { SectionHeader } from "../../Components"

const Main = ({context,dispatch}) => {
    return <SectionHeader> {context.test} </SectionHeader>
}

export default withMain(Main)
