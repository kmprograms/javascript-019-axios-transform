import axios from "axios";

// ----------------------------------------------------- 1 -------------------------------------------------------
/*(async function() {
    const result = await axios({
        method: 'post',
        url: 'http://localhost:8080/workers',
        data: {
            name: 'WORKER A',
            salary: 1000
        }
    });
    console.log(result);
    console.log(result.data);
    console.log(result.status);
    console.log(result.statusText);
})().then();*/

// ----------------------------------------------------- 2 -------------------------------------------------------

/*(async function() {
    const result = await axios.post(
        'http://localhost:8080/workers',
        {
            name: 'WORKER B',
            salary: 2000
        },
        {
            headers: {'author': 'KM'}
        }
    );
    console.log(result);
    console.log(result.data);
    console.log(result.status);
    console.log(result.statusText);
})().then();*/


// ------------------------------------------------------ 3 ------------------------------------------------------
/*(async function() {
    const result = await axios.all([
        axios.get('http://localhost:8080/workers'),
        axios.get('http://localhost:8080/workers/WORKER A'),
    ])
    console.log(result);
    console.log(result[0]);
    console.log(result[1]);
})().then();*/

// ------------------------------------------------------ 4 ------------------------------------------------------
// Przeksztalcenie odpowiedzi z servera
/*(async function() {
    const result = await axios.get('http://localhost:8080/workers', {
        transformResponse: [(data, headers) => {
            console.log('----------------------------- HEADERS ------------------------');
            console.log(headers);
            headers['a'] = 'xxxx';
            console.log('----------------------------- HEADERS ------------------------');
            const json = JSON.parse(data);
            return  json.map(element => ({ ...element, name: element.name.toLowerCase() }));
        }]
    });
    console.log(result);
})().then();*/

// ------------------------------------------------------ 5 ------------------------------------------------------
// Przeksztalcenie danych wysylanych do servera
(async function () {
    const result = await axios.post('http://localhost:8080/workers', {
            name: 'WORKER C',
            salary: 2000
        },
        {
            transformRequest: [(data, headers) => {
                console.log('----------------------------- HEADERS ------------------------');
                console.log(headers);
                headers['author'] = 'TRANSFORM KM';
                headers['Content-Type'] = 'application/json';
                console.log('----------------------------- HEADERS ------------------------');
                return JSON.stringify(data.salary > 10000 ? data : {});
            }]
        });
    console.log(result);
})().then();
