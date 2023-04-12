import "../Style/Card.css";
import { TiTick } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx";

const Card = (props) => {

    const details = props.cardDetails;
    //console.log(details);
    return (


        <div className ="row">

            {details.map((detail) => (

                <div className="col-lg-4" key={detail.id}>
                    <div className="card-body p-2 my-2">
                        <h6 className="title text-muted">{detail.title}</h6>
                        <span className="h1">${detail.price}</span>
                        <sub>/month</sub>
                        <hr />
                        <ul className="text-start">
                            {detail.id === 0 ? <li><TiTick />{detail.users}</li> : <li><TiTick /><strong>{detail.users}</strong></li>}
                            <li><TiTick />{detail.storage} Storage</li>
                            <li><TiTick />Unlimited Public Projects</li>
                            <li><TiTick />Cummunity Access</li>
                            {detail.id === 0 ? <li className="text-muted"><RxCross2 />Unlimited Private Projects</li> : <li><TiTick />Unlimited Private Projects</li>}
                            {detail.id === 0 ? <li className="text-muted"><RxCross2 />Dedicated Phone Support</li> : <li><TiTick />Dedicated Phone Support</li>}
                            {detail.id === 0 ? <li className="text-muted"><RxCross2 />Free Subdomin</li> : <>{detail.id === 1 ? <li><TiTick />Free Subdomin</li> : <li><TiTick /><strong>Unlimited </strong>Free Subdomin</li>}</>}
                            {detail.id === 2 ? <li><TiTick />Monthly Status Reports</li> : <li className="text-muted"><RxCross2 />Monthly Status Reports</li>}
                        </ul>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary rounded-pill">BUTTON</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Card;                    