
// SWR is a popular library of data fetching.

// Let's try to implement the basic usage by ourselves.

// import React from 'react'

// function App() {
//   const { data, error } = useSWR('/api', fetcher)
//   if (error) return <div>failed</div>
//   if (!data) return <div>loading</div>

//   return <div>succeeded</div>
// }
// this is not to replicate the true implementation of useSWR()
// The first argument key is for deduplication, we can safely ignore it for now


import {useEffect, useState} from 'react';

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  // your code here
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
  const fetcherResult = fetcher();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcherResult;
        setData(response);
      } catch (err) {
        setError(err);
      }
    }
    // this ensure that we only call the fetchData function if fetcherResult is a promise
    // this check is necessary because fetcher might return a synchronous value instead of a promise and in that case, we don't need to await anything
    if (fetcherResult instanceof Promise) {
      fetchData();
    }
  }, [])

  const result = fetcherResult instanceof Promise ? data : fetcherResult;
  return {data: result, error}
}