import { useEffect, useState } from "react";

function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }
        
            setIsFetching(false);
        }
    
        fetchData();
    }, [fetchFn]);

    // 커스텀 훅에 있는 상태값을 객체로 그룹화하여 반환.
    return {
        isFetching,
        fetchedData,
        setFetchedData,
        error,
    }
}