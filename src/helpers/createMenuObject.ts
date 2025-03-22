type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'several';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        several: false
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}