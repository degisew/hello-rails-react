import React, {useEffect} from 'react'
    import { useDispatch, useSelector } from "react-redux";
    import { getAllGreets, fetchGreetingAsyncThank } from "../redux/greetReducer";
    const Greeting = () => {
        const greetList = useSelector(getAllGreets);
        console.log(greetList)
        const dispatch = useDispatch();
        useEffect(() => {
            if (greetList.length === 0 )
                dispatch(fetchGreetingAsyncThank());
        }, [dispatch]);

        return <ul>
            Top {greetList.length} greetings
            {greetList.map((greet) => (
                    <li>{greet.message}</li>
                )
            )}
        </ul>;
}

export { Greeting };