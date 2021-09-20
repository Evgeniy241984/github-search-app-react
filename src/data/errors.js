
export function errorProcessor(results, setErrorProp) {

    const { message, code } = results;
        
    if (code !== '200' && message) throw Error(message);
        
    setErrorProp(null);
}
    

