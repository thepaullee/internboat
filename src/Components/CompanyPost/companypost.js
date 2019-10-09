import React from 'react';
import axios from 'axios';
import {Card, CardBody, CardDeck, CardSubtitle, CardHeader, CardTitle} from 'shards-react';
import './companypost.css';

class CompanyPost extends React.Component{
    state={
        companies:[]
    };

    componentWillMount(){
        axios.get('https://intern-boat.firebaseio.com/companies.json').then(res => {
            const companies = res.data;
            this.setState({companies});
        })
    }

    render() { 

        return(
            <div className="companyPost">
                <CardDeck className="company-cards">


                    {Object.values(this.state.companies).map((key, index) => 
                    <div key={index}>
                        <Card style={{width: "300px", height:"300px"}}>
                            <CardHeader>
                                <CardTitle>{key.companyName}</CardTitle><br/>
                                <CardSubtitle>Applications: {key.isHiring ? "OPEN":"CLOSED"}</CardSubtitle>

                            </CardHeader>
                            
                            <CardBody>
                                <CardSubtitle>Regions:</CardSubtitle>
                                <p>{key.countries.map((value, index) =>
                                        {return <p key={index}>{value}</p>})}
                                </p>


                                <CardSubtitle>Hiring Periods</CardSubtitle>
                                <p>Fall: {key.hiringPeriods.fall ? "Yes":"False"}<br></br>
                                Winter: {key.hiringPeriods.winter ? "Yes":"False"}<br></br>
                                Summer: {key.hiringPeriods.summer ? "Yes":"False"}</p>
                                <a href={key.internshipPage} target="_blank" rel="noopener noreferrer">Internship Page</a>

                            </CardBody>
                        </Card>
                    </div>
                    )}
                </CardDeck>
            </div>
        );
    }
}

export default CompanyPost;