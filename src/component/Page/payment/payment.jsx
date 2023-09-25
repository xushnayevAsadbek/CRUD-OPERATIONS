import { useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons"
export const Payment = () => {


    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1)
    }
    return (
        <div className="container" style={{
            backgroundColor: '#E5E5E5'
        }}>
            <div className="sudetnt-page--header">
                <h1>
                    Payment Details
                </h1>
                <div>
                    <button className="back--btn" onClick={onBack}>onBack</button>
                </div>
            </div>

            <div style={{
                marginLeft: "-105px"
            }}>

                <table className="table" style={{
                    width: "93%",
                    
                }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Payment Schedule</th>
                            <th>Bill Number</th>
                            <th>Amount Paid</th>
                            <th>Balance amount </th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody  >
                        <tr >
                            <td>Karthi</td>
                            <td>First</td>
                            <td>0111235414</td>
                            <td>INR 35,000</td>
                            <td>INR 55,000</td>
                            <td>08-Dec,2021</td>
                            <td><button style={{
                                border: "none"
                            }}><EyeOutlined style={{
                                color: "orange",

                            }} /></button></td>
                        </tr>
                        <tr>
                            <td>Karthi</td>
                            <td>First</td>
                            <td>0111235414</td>
                            <td>INR 35,000</td>
                            <td>INR 55,000</td>
                            <td>08-Dec,2021</td>
                            <td><button style={{
                                border: "none"
                            }}><EyeOutlined style={{
                                color: "orange",

                            }} /></button></td>
                        </tr>
                        <tr>
                            <td>Karthi</td>
                            <td>First</td>
                            <td>0111235414</td>
                            <td>INR 35,000</td>
                            <td>INR 55,000</td>
                            <td>08-Dec,2021</td>
                            <td><button style={{
                                border: "none"
                            }}><EyeOutlined style={{
                                color: "orange",

                            }} /></button></td>
                        </tr>
                        <tr>
                            <td>Karthi</td>
                            <td>First</td>
                            <td>0111235414</td>
                            <td>INR 35,000</td>
                            <td>INR 55,000</td>
                            <td>08-Dec,2021</td>
                            <td><button style={{
                                border: "none"
                            }}><EyeOutlined style={{
                                color: "orange",

                            }} /></button></td>
                        </tr>
                        <tr>
                            <td>Karthi</td>
                            <td>First</td>
                            <td>0111235414</td>
                            <td>INR 35,000</td>
                            <td>INR 55,000</td>
                            <td>08-Dec,2021</td>
                            <td><button style={{
                                border: "none"
                            }}><EyeOutlined style={{
                                color: "orange",

                            }} /></button></td>
                        </tr>


                    </tbody>
                </table>
            </div>
           
        </div>
    )
}