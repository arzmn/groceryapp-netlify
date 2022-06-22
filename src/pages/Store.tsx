import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store(){
    return(
        <>
        <div className="mt-5 mb-5">
    <Row md={3} xs={2} lg={4} className="g-6">
        {storeItems.map(item=>(
            <Col key={item.id}>
            <StoreItem {...item}/>
            </Col>

        ))}
        
    </Row>
    </div>
    </>
    )
}