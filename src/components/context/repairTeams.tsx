import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import { RepairTeamsDto } from "../interfaces";

interface Props {
    children: any
}

const list: RepairTeamsDto[] = []

const RepairTeamsContext = React.createContext({
    teams: list,
    setTeams: (arg: RepairTeamsDto[]) => {},  
});

const RepairTeamsContextProvider = ({ children }: Props) => {
    const [teams, setTeams] = useState<RepairTeamsDto[]>([])

    useEffect(() => {
        async function GetTeamsInfo() {
            try {
                let response = await axios.get(process.env.REACT_APP_API + 'repair/teams')
                if(response.status === 200) {
                    // console.log('teams',response)
                    let tempArray: RepairTeamsDto[] = []
                    Object.entries(response.data).map((item : any, index) => {
                        tempArray.push({
                            name_team: item[0],
                            is_busy: item[1].is_busy,
                            current_location: item[1].current_location,
                        })
                    })
                    setTeams(tempArray)
                }
                else console.log('error')
            } catch (e: any) {
                console.log(e.message)
            }
        }
        GetTeamsInfo()
        // setInterval(GetTeamsInfo, 2000)
      },[])
    
    return (
        <RepairTeamsContext.Provider
            value={{
                teams,
                setTeams
            }}
        >
            {children}
        </RepairTeamsContext.Provider>
    );
};

export default RepairTeamsContextProvider;

export { RepairTeamsContext };