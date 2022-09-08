import { SectionHeader } from "../../Components"
import { useCtxValue } from "../../Context/context"
import { Link } from "react-router-dom"
import { COLORS } from "../../Constants/colors"

const RouterTest = () => {
    const [context] : any = useCtxValue()
    return (
        <div id="router-test">
            <div className="router-test-div">   
                    <SectionHeader> Router working !</SectionHeader>
                
                <Link to="/">
                    <button style={{marginTop: 130}}> 
                        Home                     
                    </button>
                </Link>

                
            </div>
            

            <style>
                {
                /*  I'm repeating CSS code from Main,
                    but since this file is an example and should be deleted, 
                    I am not worried.*/}
              {`
                #router-test {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    align-content: center;
                    background-color: ${context.contextTest};  
                }

                .router-test-div {
                    width: 1000px;
                    min-height: 100vh;
                    text-align: center;
                    border-width: 0px 1px;
                    border-color: #C6C6C6;
                    border-style: solid;  
                    background-color: ${COLORS.background};
                    
                }

                .router-test-div a button {
                    background-color: ${COLORS.background};
                    padding: 12px 24px;
                    border-radius: 24px;
                    font-size: 28px;           
                    text-decoration: none;
                    color: black;
                }
            
                .router-test-div a button:hover {
                    background-color: ${COLORS.accent} !important;
                    cursor: pointer;
                }

              `}
            </style>
        </div>
        
    )
}

export default RouterTest