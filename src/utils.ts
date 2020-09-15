export const listToMatrix = (list: any[], elementsPerSubArray: number) => {
    var matrix: any[] = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

export const generateRequestArrayIcd10 = (callCount: number, options: any) => {
    let arrayPromises: any[] = []

    for (var i = 0; i < callCount; i++) {
        let fetchConf = {
            method: 'GET',
            signal: options.signal,
            url: `${process.env.REACT_APP_HIMS_API_CLIENT_URL}icd10-codes?filter=${JSON.stringify({
                limit: options.limit,
                skip: options.defaultSkip + (i * options.limit)
            })}`
        }

        arrayPromises.push(fetchConf);
    }

    return arrayPromises
}

export const generateRequestArrayCpt = (callCount: number, options: any) => {
    let arrayPromises: any[] = []

    for (var i = 0; i < callCount; i++) {
        let fetchConf = {
            method: 'GET',
            signal: options.signal,
            url: `${process.env.REACT_APP_HIMS_API_CLIENT_URL}cpts?filter=${JSON.stringify({
                limit: options.limit,
                skip: options.defaultSkip + (i * options.limit)
            })}`
        }

        arrayPromises.push(fetchConf);
    }

    return arrayPromises
}
