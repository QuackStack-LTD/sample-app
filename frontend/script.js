

function btnClickFunction(){
        const message = document.getElementById("inpt").value
        fetch("http://localhost:3000/sendMessage/" + message)
    }

    document.getElementById("btnid").onclick = btnClickFunction

    setInterval(async () => {
        const response = await fetch("http://localhost:3000/recieveChat")
        document.getElementById("chatbox").innerHTML = await response.text()
    }, 1000)