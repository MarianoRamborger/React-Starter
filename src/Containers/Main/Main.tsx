
import withMain from "./withMain"
import { SectionHeader } from "../../Components"
import { COLORS } from "../../Constants/colors"
import { Link } from "react-router-dom"

const Main = ({context,testContext}) => {
    return <div id="main-container">

        <div className="main-inner-div"> 
            <SectionHeader fontSize={32}> Starter up and running! </SectionHeader>

            <div className="test-div" style={{marginTop: 100}}>
                <div>
                    <p>Test Context </p>
                    <input type="color" value={context.contextTest} onChange={(e) => {testContext(e.target.value)} }/> 
                </div>  
                
            </div>

            <div className="test-div" style={{marginTop: 30}}>  
                <div>
                    <Link to="/routing"> Test Routing </Link>
                </div> 
                
            </div>

        </div>

        

        
        
    <style> 
        {`
            #main-container { 
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              align-content: center;
              background-color: ${context.contextTest};
              
                        
            }
            .main-inner-div {
                width: 1000px;
                min-height: 100vh;
                text-align: center;
                border-width: 0px 1px;
                border-color: #C6C6C6;
                border-style: solid;  
                background-color: ${COLORS.background};
            }

            .test-div { 
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                line-height: 50px;
            }

            .test-div div {
                display: inherit;
                align-items: inherit;
                width: 250px;
            }

            .test-div div p, .test-div div a {
                font-size: 24px;
                padding-right: 30px;
                text-decoration: none;
                color: black;
            }

            .test-div div a:hover {
                color: ${COLORS.accent}
            }


            
        `}
    </style>
    </div>
}

export default withMain(Main)
