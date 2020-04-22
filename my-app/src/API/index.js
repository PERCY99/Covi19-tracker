import axios from 'axios';


export const FetchData = async () =>{
    try {
        const {data} = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
        const UpadatedData = {
            confirmedCases : data.data.summary.total,
            deaths : data.data.summary.deaths,
            discharged : data.data.summary.discharged,
            lastupdated : data.lastRefreshed,
        }
        
        return UpadatedData

        
    } catch (error) {
        
    }
}