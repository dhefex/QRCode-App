
let send = document.querySelector(".send")
let input = document.querySelector(".input")
let qrcode = document.querySelector(".qrcode")

function generateQrcode(){
    send.addEventListener("click", () => {
        const text = input.value.trim()

        // Verify value        
        if (!text){
            alert("[Error] Enter a text or url")
            input.focus()
            return
        }

        qrcode.replaceChildren();

        // Get text or url
        new QRCode(qrcode, {
        text: text,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H
        });

    

        


    })


}

generateQrcode()