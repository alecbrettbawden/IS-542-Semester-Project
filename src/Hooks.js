// import { useEffect, useState } from 'react';
// import axios from 'axios'

// export default function useFetchAppData(props) {
//     const [issue, setIssue] = useState(props.issue)

//     axios
//         .get(`https://api.github.com/search/issues?q=${issue}`, {headers: {"User-Agent":"alecbrettbawden"}})
//         .then(response => {
//         setIssue('')
//         return response.data

// }