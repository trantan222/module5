import {useParams} from "react-router-dom"
export function StudentUpdate() {
    const param = useParams();
    return (
        <>
            <h1>Student Update</h1>
            <h1>{param.id}</h1>
        </>
    )
}
