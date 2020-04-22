import React, { Component } from 'react'
import { Card, CardContent, Typography , Grid } from "@material-ui/core";
import styles from'./Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames'

 class Cards extends Component {


    render() {
const {data} = this.props
console.log(data);

if(!data.confirmedCases)
{
    return 'LOADING....'
} 
        return (
            <div className = {styles.container}>
                <Grid container spacing={3} justify = "center">
                    <Grid item component = { Card } xs = {12}  md = {3} className = {cx(styles.card , styles.infected)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                              Infected 
                            </Typography>
                            <Typography variant = "h5"> 
                            <Countup 
                                    start = {0} 
                                    end = {data.confirmedCases}
                                    duration = {2.5}
                                    separator = ","
                                    
                                />
                            </Typography>
                            <Typography color = "textSecondary" gutterBottom>{}</Typography>
                            <Typography variant = "body2">Number Of Active COVID-19 Patients</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component = { Card } xs = {12}  md = {3} className = {cx(styles.card , styles.recovered)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Cured
                            </Typography>
                            <Typography variant = "h5"><Countup 
                                    start = {0} 
                                    end = {data.discharged}
                                    duration = {2.5}
                                    separator = ","
                                    
                                /></Typography>
                            <Typography color = "textSecondary" gutterBottom></Typography>
                            <Typography variant = "body2">Number Of COVID-19 Patients Recovered</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component = { Card } xs = {12}  md = {3} className = {cx(styles.card , styles.deaths)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant = "h5"><Countup 
                                    start = {0} 
                                    end = {data.deaths}
                                    duration = {2.5}
                                    separator = ","
                                    
                                /></Typography>
                            <Typography color = "textSecondary" gutterBottom></Typography>
                            <Typography variant = "body2">Number Of Deaths Due To COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Cards
