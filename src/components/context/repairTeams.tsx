import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import { IRepairTeamsDto } from "../interfaces";

interface Props {
    children: any
}

const list: IRepairTeamsDto[] = []

const RepairTeamsContext = React.createContext({
    teams: list,
    setTeams: (arg: IRepairTeamsDto[]) => {},  
});

const RepairTeamsContextProvider = ({ children }: Props) => {
    const [teams, setTeams] = useState<IRepairTeamsDto[]>([])

    useEffect(() => {
        async function GetTeamsInfo() {
            try {
                let response = await axios.get(process.env.REACT_APP_API + 'repair/teams')
                if(response.status === 200) {
                    // console.log('teams',response)
                    let tempArray: IRepairTeamsDto[] = []
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