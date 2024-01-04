
const DOManipulator = () => {
    function newElementClass(elementType, className){
        let element = document.createElement(`${elementType}`);
        element.setAttribute('class', className);
        return element;
    }
    function firstLoad() {
        let main = newElementClass('div','');
        main.textContent='hi';
        document.body.appendChild(main)
    }
    function reloadPage() {
        document.body.textContent = '';
        document.body.setAttribute('class', '')
        console.log('All clean!')
    }
    
    return {
        reloadPage,
        firstLoad
    }
};

export default DOManipulator;
