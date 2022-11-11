const removes = () => {
    document.getElementById("ul").style.display = "block"
}
const searchYoutubers = () => {
    const getUserInput = document.getElementById("userInputField").value.toUpperCase();
    // console.log(getUserInput);
    const ulList = document.getElementsByTagName("li");

    // console.log(ulList);
    //         // let x = li.getElementsByClassName("a");
    //         // console.log(li) it return new array;
    //         //now we have to cheak individully by looping through ......

    for (let i = 0; i < ulList.length; i++) {
        let getValfrmAnchor = ulList[i].getElementsByTagName("a")[0];
        // console.log(getValfrmAnchor);
        let textContent = getValfrmAnchor.innerHTML || getValfrmAnchor.textContent;
        if (textContent.toUpperCase().indexOf(getUserInput) > - 1) {
            ulList[i].style.display = ""
        } else {
            ulList[i].style.display = "none"
        }
    }
}