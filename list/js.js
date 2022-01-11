function search(ele) {
    if(event.key === 'Enter') {
        const para = document.createElement("p");
        const node = document.createTextNode(ele.value);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para); 
        document.getElementById('myInput').value = '';
    }
}