import React from 'react';
import axios from 'axios';
import {Card, CardBody, CardTitle, CardSubtitle, CardHeader} from 'shards-react';
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
                <Card>
                </Card>


                    {Object.values(this.state.companies).map((key, index) => 
                    <div>
                        <Card className="company-card">
                            <CardHeader>{key.companyName}</CardHeader>
                            <CardBody>
                                <CardSubtitle>Applications: {key.isHiring ? "OPEN":"CLOSED"}</CardSubtitle>
                                <p>Countries: {key.countries}</p>
                                <CardSubtitle>Hiring Periods</CardSubtitle>
                                <p>Fall: {key.hiringPeriods.fall ? "Yes":"False"}</p>
                                <p>Winter: {key.hiringPeriods.winter ? "Yes":"False"}</p>
                                <p>Summer: {key.hiringPeriods.summer ? "Yes":"False"}</p>
                                <h4>Applications: {key.isHiring ? "Open":"Closed"}</h4>
                                <a href={key.internshipPage} target="_blank" rel="noopener noreferrer">Internship Page</a>

                            </CardBody>
                        </Card>
                    </div>

                    /*<div>
                        <h1>{key.companyName}</h1>
                        <h4>Countries: {key.countries}</h4>
                        <h4>Hiring Periods</h4>
                        <p>Fall: {key.hiringPeriods.fall ? "Yes":"False"}</p>
                        <p>Winter: {key.hiringPeriods.winter ? "Yes":"False"}</p>
                        <p>Summer: {key.hiringPeriods.summer ? "Yes":"False"}</p>
                        <h4>Applications: {key.isHiring ? "Open":"Closed"}</h4>
                        <a href="{key.internshipPage}">Internship Page</a>
                    </div>*/
                    )}
                
            </div>
        );
    }
}

export default CompanyPost;